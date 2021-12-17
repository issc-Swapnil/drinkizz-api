const express = require("express");
const router = express.Router();

const ProductController = require('../controller/Product')


//product routes
router.get('/product' , ProductController.getAllData);
router.post('/product' , ProductController.addProduct);
router.get('/product/category/:category' , ProductController.getProductByCategory)
router.get('/product/:id' , ProductController.getSingleProduct);
router.post('/product/:id' , ProductController.updateProduct);
router.delete('/product/:id' , ProductController.deleteData)

module.exports = router;
