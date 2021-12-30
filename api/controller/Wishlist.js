const mongoose = require('mongoose');
const Wishlist = require("../model/Wishlist");


//get all wishlist data
const getAllData = async (req, res,) => {
    try {
        const wishList = await Wishlist.find().sort({ _id: -1 })
        if (wishList.length != 0) {
            res.status(200).json({
                totalwishlist: wishList.length,
                data: wishList
            });
        } else {
            res.status(203).json({
                message: 'No entries found in table'
            });
        }
    } catch (error) {
        res.send('Error => ' + error)
    }
}

//add product
const addWishlist = async (req, res) => {
    const id = req.params.id;
    const wishlstProduct = await Wishlist.findById(id)

    const wishList = Wishlist({
        name: req.body.name,
        category: req.body.category,
        size: req.body.size,
        price: req.body.price,
        rating: req.body.rating,
        image: req.body.image,
    });
    try {
        if (wishlstProduct) {
            res.status(201).json({
                message: "This is already in your wishlist"
            });
        } else {
            wishList.save()
                .then(result => {
                    res.status(201).json({
                        message: "Thank you for adding data"
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
    const id = req.params.id;
    try {
        const deleteData = await Wishlist.findByIdAndRemove(id)
        res.status(200).json({
            message: "Record Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getAllData, addWishlist, deleteData }