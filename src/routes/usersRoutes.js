// src/routes/usersRoutes.js

const express = require('express');
const router = express.Router();
const usersHandlers = require('../handlers/usersHandlers');

// Ruta para obtener todos los usuarios
router.get('/', usersHandlers.getAllUsers);

// Ruta para obtener un usuario por ID
router.get('/:id', usersHandlers.getUserById);

// Ruta para crear un nuevo usuario
router.post('/', usersHandlers.createUser);

// Ruta para actualizar un usuario existente
router.put('/:id', usersHandlers.updateUser);

// Ruta para eliminar un usuario
router.delete('/:id', usersHandlers.deleteUser);

module.exports = router;
