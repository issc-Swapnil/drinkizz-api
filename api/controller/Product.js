const mongoose = require('mongoose');
const Product = require('../model/Product');

const getAllData = async (req, res,) => {
    try {
         const productList = await Product.find().sort({ _id: -1 })
         if (productList.length != 0) {
              res.status(200).json({
                totalproducts : productList.length,
                data:productList
              });
         } else {
              res.status(404).json({
                   message: 'No entries found in table'
              });
         }
    } catch (error) {
         res.send('Error => ' + error)
    }
}


const addProduct = async (req, res) => {
    const product = Product({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            rating: req.body.rating,
            image: req.body.image,
        });
            product.save()
               .then(result => {
                    res.status(201).json({
                        message: "Thank you for adding data"
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        error: err,
                });
            });
}


const deleteData = async (req, res) => {
    const id = req.params.id;
    try {
         const deleteData = await Product.findByIdAndRemove(id)
         res.status(200).json({
              message: "Record Deleted Successfully"
         })
    } catch (error) {
         res.status(500).json(error)
    }
}

module.exports=
{
    getAllData,
    addProduct,
    deleteData
}