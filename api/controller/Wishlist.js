const mongoose = require('mongoose');
const Wishlist = require("../model/Wishlist");


//get all wishlist data
const getAllData = async (req, res,) => {
    try {
        const wishList = await Wishlist.find({ "user": req.params.userId })
            .populate('product', 'name category price size image').sort({ _id: -1 })
        if (wishList.length != 0) {
            res.status(200).json({
                totalwishlist: wishList.length,
                data: wishList
            });
        } else {
            res.status(204).json({
                message: 'No entries found in table'
            });
        }
    } catch (error) {
        res.send('Error => ' + error)
    }
}

//add product
const addWishlist = async (req, res) => {
    const wishlstProduct = await Wishlist.find({ "product": req.body.productId, "user": req.body.userId })
    const wishList = Wishlist({
        product: req.body.productId,
        user: req.body.userId
    })
    try {
        if (wishlstProduct.length > 0) {
            res.status(201).json({
                message: "This is already in your wishlist"
            });
        } else {
            wishList.save()
                .then(result => {
                    res.status(201).json({
                        message: "Product added to Wishlist"
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
        const deleteData = await Wishlist.find({ "_id":req.body.id, "user": req.body.userId }).remove()
        res.status(200).json({
            message: "Record Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getAllData, addWishlist, deleteData }