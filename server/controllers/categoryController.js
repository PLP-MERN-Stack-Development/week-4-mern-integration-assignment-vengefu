const Category = require('../models/Category');

// Create a new category
exports.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    // Check if category already exists
    let category = await Category.findOne({ name });
    if (category) {
      return res.status(400).json({ msg: 'Category already exists' });
    }
    // Create a new category
    category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  }
    catch (error) {
    console.error(error);
      res.status(500).json({ msg: 'Server error' });
    }
  }
  
  // Get all categories(admin only
  exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }

}   