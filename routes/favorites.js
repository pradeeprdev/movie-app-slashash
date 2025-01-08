const express = require('express');
const { Favorite } = require('../models/favorite');
const router = express.Router();

router.get('/', async (req, res) => {
    const favorites = await Favorite.findAll();
    res.json(favorites);
});

router.post('/', async (req, res) => {
    const { title, year, type, poster } = req.body;
    try {
        const favorite = await Favorite.create({ title, year, type, poster });
        res.status(201).json(favorite);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
