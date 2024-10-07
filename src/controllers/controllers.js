// src/controllers.js
const { productos, usuarios } = require('./database');

// Productos
const obtenerProductos = () => productos;

const agregarProducto = (producto) => {
  productos.push({ id: productos.length + 1, ...producto });
};

const eliminarProducto = (id) => {
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) {
    productos.splice(index, 1);
  }
};

// Usuarios
const obtenerUsuarios = () => usuarios;

const Joi = require('joi');

const productoSchema = Joi.object({
  nombre: Joi.string().required(),
  precio: Joi.number().required(),
  stock: Joi.number().optional()
});

const handlePostProducto = (req, res) => {
  try {
    const { error } = productoSchema.validate(req.body);
    if (error) throw new Error(error.details[0].message);

    agregarProducto(req.body);
    res.status(201).send('Producto añadido');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Exportar las funciones
module.exports = { obtenerProductos, agregarProducto, eliminarProducto, obtenerUsuarios,handlePostProducto };
