const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, deletePost  } = require('../controllers/postController');

// Route to create a new post
router.post('/create', createPost);
// Route to get all posts
router.get('/', getAllPosts);
// Route to delete a post by ID
router.delete('/:id', deletePost);

module.exports = router;
