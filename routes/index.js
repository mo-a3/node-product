var express = require('express');
var router = express.Router();
var productService = require('../services/product-service')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('product', { title: 'Products', data:productService.getproducts() });
});


 

router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Products', data:productService.getproducts() });
});

router.get('/product/add', function(req, res, next) {
  res.render('product-add', { title: 'Add Product', data:productService.getproducts() });
});

router.get('/product/edit/:id', function(req, res, next) {
  res.render('product-edit', { title: 'Edit Product', product:productService.getProductById(req.params.id) });
});

router.get('/product/copy/:id', function(req, res, next) {
  res.render('product-copy', { title: 'copy Product', product:productService.getProductById(req.params.id) });
});


module.exports = router;
