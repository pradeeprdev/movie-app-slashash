require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models/favorite');
const searchRoutes = require('./routes/search');
const favoriteRoutes = require('./routes/favorites');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.use('/api/search', searchRoutes);
app.use('/api/favorites', favoriteRoutes);

sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
