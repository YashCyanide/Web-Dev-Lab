// userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Define routes
router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.destroy); // Ensure this line is correct

module.exports = router;
