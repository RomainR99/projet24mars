# Étape 1: Construction de l'image Node.js
FROM node:alpine AS node-builder

# Créer les utilisateurs
RUN adduser --disabled-password --ingroup node --no-create-home nodeapp
RUN adduser --disabled-password --ingroup node usernode

# Copier les fichiers et installer les dépendances
COPY --chown=nodeapp . /app/
WORKDIR /app/
RUN npm install && npm audit fix

# Étape 2: Configuration de l'image PHP/Apache
FROM php:7-apache

# Installer les extensions PHP nécessaires
RUN docker-php-ext-install pdo pdo_mysql

# Copier l'application construite depuis l'image Node.js
COPY --from=node-builder /app /var/www/html

# Configurer les permissions des fichiers copiés
RUN chown -R www-data:www-data /var/www/html

# Exposer le port pour PHP/Apache
EXPOSE 80

# Commande pour démarrer Apache
CMD ["apache2-foreground"]
