const express = require('express');
const router = express.Router();
const { User, Post } = require('../models');

// Home Route
router.get('/', async (req, res) => {
    const posts = await Post.findAll();
    res.render('homepage', { posts });
});

// Dashboard Route
router.get('/dashboard', async (req, res) => {
    const userPosts = await Post.findAll({ where: { user_id: req.session.user_id } });
    res.render('dashboard', { posts: userPosts });
});

// More routes for login, signup, and CRUD operations for posts

module.exports = router;
