const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

const Favorite = sequelize.define('Favorite', {
    title: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    poster: { type: DataTypes.TEXT, allowNull: false }
});

module.exports = { sequelize, Favorite };
