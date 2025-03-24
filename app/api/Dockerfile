# Utiliser Python 3.11 comme base
FROM python:3.11

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de l'API dans le conteneur
COPY . /app/

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Exposer le port (modifie selon ton API)
EXPOSE 5000

# Lancer l'application (modifie selon ton framework)
CMD ["python", "rotes.py"]
