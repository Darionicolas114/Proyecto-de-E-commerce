// src/database.js

let productos = [
    { id: 1, nombre: "Camiseta", precio: 19.99, stock: 50 },
    { id: 2, nombre: "Pantalones", precio: 39.99, stock: 30 }
  ];
  
  let usuarios = [
    { id: 1, nombre: "Juan", email: "juan@example.com", password: "1234" },
    { id: 2, nombre: "Maria", email: "maria@example.com", password: "5678" }
  ];
  
  module.exports = { productos, usuarios };
  