const express = require('express');
const router = express.Router();    
const { getCategories, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');

// Route to get all categories
router.get('/', getCategories);
// Route to create a new category
router.post('/', createCategory);
// Route to update an existing category
router.put('/:id', updateCategory);
// Route to delete a category
router.delete('/:id', deleteCategory);

module.exports = router;