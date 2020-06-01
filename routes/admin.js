const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const products = [];

const router = express.Router();

router.post('/add-product', (req, res, next) => {
    products.push({
        title: req.body.title
    })
    res.redirect('/');
});

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
    // res.sendFile(path.join(rootDir, 'views', 'add-product.htm l'));
});

exports.routes = router;
exports.products = products;