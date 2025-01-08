const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = process.env.OMDB_API_KEY;

router.get('/', async (req, res) => {
    const { query } = req.query;
    try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
        res.json(response.data.Search || []);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
