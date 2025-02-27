const express = require('express');
const produitController = require('../controllers/produitController');
const { validateProduct, validateProductId } = require('../middlewares/validation'); // Import des middlewares
const router = express.Router();

// 📌 Routes CRUD avec validation

// Ajouter un produit (POST)
router.post('/produits', validateProduct, produitController.ajouterProduit);

// Obtenir tous les produits (GET)
router.get('/produit', produitController.obtenirProduits);

// Obtenir un produit par ID (GET)
router.get('/produits/:id', validateProductId, produitController.obtenirProduitParId);

// Mettre à jour un produit (PUT)
router.put('/produits/:id', validateProductId, validateProduct, produitController.mettreAJourProduit);

// Supprimer un produit par ID (DELETE)
router.delete('/produits/:id', validateProductId, produitController.supprimerProduit);

module.exports = router;
