const mongoose = require('mongoose');
const Compare = require("../model/Compare");


//get all wishlist data
const getAllData = async (req, res,) => {
    try {
        const compare = await Compare.find({"user":req.params.userId}).populate('product', 'name category price size image rating testingNote FoodPairing  ABV subCategory').sort({ _id: -1 })
        if (compare.length != 0) {
            res.status(200).json({
                totalcompare: compare.length,
                data: compare
            });
        }else {
            res.status(204).json({
                message: 'No entries found in Compare'
            });
        }
    } catch (error) {
        res.send('Error => ' + error)
    }
}

//add product
const addCompare = async (req, res) => {
    const CompareProduct = await Compare.find({"product":req.body.productId , "user":req.body.userId})
    const comapre = Compare({
        product: req.body.productId,
        user:req.body.userId,
    })
    try {
        if (CompareProduct.length > 0) {
            res.status(201).json({
                message: "This is already in your compare "
            });
        }else if(CompareProduct.length >3){
            res.status(201).json({
                message: "You can add only 3 products "
            });
        } else {
            comapre.save()
                .then(result => {
                    res.status(201).json({
                        message: "Product added to compare"
                    });
                })
        }
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
}



//delete data
const deleteData = async (req, res) => {
    try {
        const deletedData = await Compare.findByIdAndRemove(req.params.id)
        if(deletedData){
            res.status(200).json({
                message: "Record Deleted Successfully",
            })
        }else{
            res.status(204).json({
                message: "Compare data Not found",
            })
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getAllData, addCompare, deleteData }