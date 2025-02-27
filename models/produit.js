const mongoose = require('mongoose');

// Définition du schéma du produit
const produitSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, 'Le nom du produit est obligatoire'],
    trim: true
  },
  description: {
    type: String,
    default: 'Aucune description fournie'
  },
  prix: {
    type: Number,
    required: [true, 'Le prix est obligatoire'],
    min: [0, 'Le prix ne peut pas être négatif']
  },
  quantite: {
    type: Number,
    default: 0,
    min: [0, 'La quantité ne peut pas être négative']
  },
  dateCreation: {
    type: Date,
    default: Date.now
  }
}, { collection:'script'});

// Création du modèle Product basé sur le schéma
const Produit = mongoose.model('Product', produitSchema);

module.exports = Produit;
