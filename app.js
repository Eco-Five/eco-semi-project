const express = require('express');
const path = require('path');

const app = express(); // Create the Express application

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Main Page Route
app.get('/', (req, res) => {
    res.render('index'); // Renders the `index.ejs` file from the `views` folder
});

// Brand Detail Routes
app.get('/brand/eco-green', (req, res) => {
    res.send('<h1>Eco Green Page</h1><p>More information about Eco Green.</p>');
});

app.get('/brand/nature-care', (req, res) => {
    res.send('<h1>Nature Care Page</h1><p>More information about Nature Care.</p>');
});

app.get('/brand/recycle-wear', (req, res) => {
    res.send('<h1>Recycle Wear Page</h1><p>More information about Recycle Wear.</p>');
});

// Export the app for use in www.js
module.exports = app;