// Importation des modules nécessaires
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database'); // Connexion à la base de données
const produitRoutes = require('./routes/produitRoute'); // Routes des produits
const bodyParser = require('body-parser'); // Middleware pour parser les requêtes

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Initialisation de l'application Express
const app = express();

// Connecter à la base de données MongoDB
connectDB();

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

// Utilisation des routes pour gérer les produits
app.use('/api', produitRoutes); // Toutes les routes des produits seront préfixées par '/api'

// Route de test (optionnelle)
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API de gestion des produits');
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
});
