 // controllers/produitController.js
const produitService = require('../services/produitService');

// Ajouter un produit
const ajouterProduit = async (req, res) => {
  try {
    const produit = await produitService.ajouterProduit(req.body);
    res.status(201).json(produit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtenir tous les produits
const obtenirProduits = async (req, res) => {
  try {
    const produits = await produitService.obtenirProduits();
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir un produit par ID
const obtenirProduitParId = async (req, res) => {
  try {
    const produit = await produitService.obtenirProduitParId(req.params.id);
    if (!produit) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    res.status(200).json(produit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un produit
const mettreAJourProduit = async (req, res) => {
  try {
    const produit = await produitService.mettreAJourProduit(req.params.id, req.body);
    if (!produit) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    res.status(200).json(produit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un produit
const supprimerProduit = async (req, res) => {
  try {
    const produit = await produitService.supprimerProduit(req.params.id);
    if (!produit) {
      return res.status(404).json({ message: 'Produit non trouvé' });
    }
    res.status(200).json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  ajouterProduit,
  obtenirProduits,
  obtenirProduitParId,
  mettreAJourProduit,
  supprimerProduit
};
