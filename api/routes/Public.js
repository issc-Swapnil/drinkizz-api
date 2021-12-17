const express = require("express");
const router = express.Router();

const ProductController = require('../controller/Product')

router.post('/register' , ProductController.getAllData);
router.post('/register' , ProductController.getAllData);

router.get('/product' , ProductController.getAllData);
router.post('/product' , ProductController.addProduct);
router.delete('/product' , ProductController.deleteData)

module.exports = router;
