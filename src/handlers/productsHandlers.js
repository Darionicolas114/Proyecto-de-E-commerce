// src/handlers/productsHandlers.js

// Simulación de una base de datos con un array
let products = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
  ];
  
  // Obtener todos los productos
  const getAllProducts = (req, res) => {
    res.json(products);
  };
  
  // Obtener un producto por ID
  const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
  };
  
  // Crear un nuevo producto
  const createProduct = (req, res) => {
    const { nombre, precio } = req.body;
    const newProduct = {
      id: products.length + 1,
      nombre,
      precio
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  };
  
  // Actualizar un producto existente
  const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, precio } = req.body;
    const productIndex = products.findIndex(p => p.id === id);
    
    if (productIndex !== -1) {
      products[productIndex] = { id, nombre, precio };
      res.json(products[productIndex]);
    } else {
      res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
  };
  
  // Eliminar un producto
  const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);
    
    if (productIndex !== -1) {
      const deletedProduct = products.splice(productIndex, 1);
      res.json(deletedProduct[0]);
    } else {
      res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
  };
  
  module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
  };
  