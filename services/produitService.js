 // services/produitService.js
const Produit = require('../models/produit');

// Ajouter un produit
const ajouterProduit = async (data) => {
  const produit = new Produit(data);
  return await produit.save();
};

// Obtenir tous les produits
const obtenirProduits = async () => {
  return await Produit.find();
};

// Obtenir un produit par ID
const obtenirProduitParId = async (id) => {
  return await Produit.findById(id);
};

// Mettre à jour un produit
const mettreAJourProduit = async (id, data) => {
  return await Produit.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

// Supprimer un produit
const supprimerProduit = async (id) => {
  return await Produit.findByIdAndDelete(id);
};

module.exports = {
  ajouterProduit,
  obtenirProduits,
  obtenirProduitParId,
  mettreAJourProduit,
  supprimerProduit
};
