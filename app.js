const express = require('express');
const path = require('path');
const productRoutes = require('./routes/productRoutes'); // Import product routes

const app = express(); // Create the Express application

// Middleware for parsing JSON and form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the productRoutes file for product-related routes
app.use('/products', productRoutes);

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

// Example product data
const products = [
    { category: '친환경 제품', name: '친환경 텀블러', description: '재사용 가능한 스테인리스 텀블러', price: '32,000원', image: '/images/tumbler.jpg' },
    { category: '재료세트', name: '대나무 칫솔 세트', description: '생분해 가능한 친환경 칫솔', price: '12,000원', image: '/images/toothbrush.jpg' },
    { category: '유기농', name: '유기농 수제 비누', description: '천연 성분으로 만든 비누', price: '8,000원', image: '/images/soap.jpg' },
    { category: '재활용 제품', name: '재생지 노트', description: '재활용 종이로 만든 노트', price: '5,000원', image: '/images/notebook.jpg' }
];

app.get('/products', (req, res) => {
    const totalPages = 5; // Example total pages
    const currentPage = parseInt(req.query.page) || 1;

    res.render('product-list', {
        products,
        totalPages,
        currentPage
    });
});

// Export the app for use in www.js
module.exports = app;