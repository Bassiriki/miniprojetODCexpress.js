const { body, validationResult, param } = require('express-validator');

// Middleware de validation pour un produit
const validateProduct = [
  body('name')
    .notEmpty().withMessage('Le nom est obligatoire')
    .isLength({ min: 3 }).withMessage('Le nom doit contenir au moins 3 caractères'),
  
  body('price')
    .notEmpty().withMessage('Le prix est obligatoire')
    .isFloat({ min: 0 }).withMessage('Le prix doit être un nombre positif'),

  body('stock')
    .optional()
    .isInt({ min: 0 }).withMessage('Le stock doit être un entier positif'),

  // Vérification des erreurs
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Middleware pour valider un ID de produit dans les routes GET, DELETE, etc.
const validateProductId = [
  param('id').isMongoId().withMessage('ID invalide'),

  // Vérification des erreurs
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateProduct, validateProductId };
