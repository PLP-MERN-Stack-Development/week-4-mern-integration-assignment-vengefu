const Post = require('../models/Post');

// Create a new post    
exports.createPost = async (req, res) => {
    const { title, content, category } = req.body;
    try {
        // Check if category exists
        const existingCategory = await Category.findById(category);
        if (!existingCategory) {
            return res.status(400).json({ msg: 'Category does not exist' });
        }   
        // Create a new post
        const post = new Post({
            title,
            content,
            category,
            user: req.user.id // Assuming req.user is set by authentication middleware
        });
        await post.save();
        res.status(201).json(post);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('category', 'name').populate('user', 'name');
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};      
// Get a single category by ID
exports.getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ msg: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};
    