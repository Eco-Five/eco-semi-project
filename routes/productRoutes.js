const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Configure Multer for file uploads
const upload = multer({
    dest: path.join(__dirname, '../uploads'), // Save images in the "uploads" folder
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB max file size
});

// Route: Render the Product Registration Form
router.get('/register-product', (req, res) => {
    res.render('product-register');
});

// Route: Handle Product Submission
router.post('/register-product', upload.single('image'), (req, res) => {
    const productData = {
        name: req.body.productName,
        price: req.body.price,
        sku: req.body.sku,
        category: req.body.category,
        description: req.body.description,
        options: req.body.options,
        stock: req.body.stock,
        shippingCost: req.body.shippingCost,
        shippingTime: req.body.shippingTime,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        maxQuantity: req.body.maxQuantity,
        image: req.file
    };

    console.log(productData);
    res.send('Product registered successfully!');
});

module.exports = router;