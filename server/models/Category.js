const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
    {name: {
        type: String,
        required: [true, 'Please provide a category name'],
        unique: true},
        description: {type: String,
        required: [true, 'Please provide a category description']}
    });

module.exports = mongoose.model('Category', CategorySchema);
