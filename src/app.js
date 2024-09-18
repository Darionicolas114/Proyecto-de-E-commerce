// src/app.js

const express = require('express');
const morgan = require('morgan');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para registrar las solicitudes
app.use(morgan('dev'));

// Importa las rutas
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');

// Usa las rutas
app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido al API de E-commerce');
});

module.exports = app;
