const Product = require('../models/produit');

// 📌 Ajouter un produit
const ajouterProduit = async (data) => {
  const produit = new Product(data);
  return await produit.save();
};

// 📌 Récupérer tous les produits
const obtenirProduits = async () => {
  return await Product.find();
};

// 📌 Récupérer un produit par ID
const obtenirProduitParId = async (id) => {
  return await Product.findById(id);
};

// 📌 Mettre à jour un produit
const mettreAJourProduit = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

// 📌 Supprimer un produit
const supprimerProduit = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  ajouterProduit,
  obtenirProduits,
  obtenirProduitParId,
  mettreAJourProduit,
  supprimerProduit
};
