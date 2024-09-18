// src/routes/productsRoutes.js

const express = require('express');
const router = express.Router();
const productsHandlers = require('../handlers/productsHandlers');

// Ruta para obtener todos los productos
router.get('/', productsHandlers.getAllProducts);

// Ruta para obtener un producto por ID
router.get('/:id', productsHandlers.getProductById);

// Ruta para crear un nuevo producto
router.post('/', productsHandlers.createProduct);

// Ruta para actualizar un producto existente
router.put('/:id', productsHandlers.updateProduct);

// Ruta para eliminar un producto
router.delete('/:id', productsHandlers.deleteProduct);

module.exports = router;
