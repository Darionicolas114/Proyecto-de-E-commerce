// src/handlers/usersHandlers.js

// Simulación de una base de datos con un array
let users = [
    { id: 1, nombre: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, nombre: 'Usuario 2', email: 'usuario2@example.com' },
  ];
  
  // Obtener todos los usuarios
  const getAllUsers = (req, res) => {
    res.json(users);
  };
  
  // Obtener un usuario por ID
  const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  };
  
  // Crear un nuevo usuario
  const createUser = (req, res) => {
    const { nombre, email } = req.body;
    const newUser = {
      id: users.length + 1,
      nombre,
      email
    };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  // Actualizar un usuario existente
  const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, email } = req.body;
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex !== -1) {
      users[userIndex] = { id, nombre, email };
      res.json(users[userIndex]);
    } else {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  };
  
  // Eliminar un usuario
  const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex !== -1) {
      const deletedUser = users.splice(userIndex, 1);
      res.json(deletedUser[0]);
    } else {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  };
  
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  };
  