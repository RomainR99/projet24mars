# Stage 1: Utiliser Python 3.11 comme base pour l'application Python
FROM python:3.11 AS python-base

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de l'API dans le conteneur
COPY . /app/

# Installer les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Stage 2: Utiliser PHP et Apache pour l'application PHP
FROM php:7-apache

# Installer les extensions PHP nécessaires
RUN docker-php-ext-install pdo pdo_mysql

# Définir le répertoire de travail pour Apache
WORKDIR /var/www/html

# Copier les fichiers PHP de l'étape précédente dans le répertoire Apache
COPY --from=python-base /app /var/www/html/

# Exposer le port pour Apache
EXPOSE 80

# Lancer Apache en mode premier plan
CMD ["apache2-foreground"]
