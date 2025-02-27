const mongoose = require('mongoose');
require('dotenv').config(); // Charger les variables d'environnement

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connecté avec succès');
  } catch (error) {
    console.error('❌ Erreur de connexion à MongoDB :', error.message);
    process.exit(1); // Arrêter l'application en cas d'échec
  }
};

module.exports = connectDB;
