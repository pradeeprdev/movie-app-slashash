# Project Setup Instructions

Register and Get API Key

Visit OMDB API to register and obtain an API key.

# Install Dependencies

Initialize the project:

npm init -y

Install required dependencies:

npm install express axios sequelize mysql2 dotenv

Install development dependencies:

npm install --save-dev nodemon

# Create Database and Table

Open your MySQL client and execute the following commands:

CREATE DATABASE omdb_favorites;
USE omdb_favorites;

CREATE TABLE favorites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year VARCHAR(10) NOT NULL,
    type VARCHAR(50) NOT NULL,
    poster TEXT NOT NULL
);

# Running the Application

Start the server using nodemon:

npx nodemon server.js

Access the application in your browser at http://localhost:3000.