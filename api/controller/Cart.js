const mongoose =require('mongoose')
const Cart = require('../model/Cart')


//get all data
 const getData =async(req,res)=>{
     try{
        const cart = await Cart.find().sort({ _id: -1 })
        if (cart.length != 0) {
            res.status(200).json({
                totalcart: cart.length,
                data: cart
            });
        } else {
            res.status(404).json({
                message: 'No entries found in table'
            });
        }

     }catch(error){
        res.send('Error => ' + error)

     }
 }

 //add data 
 const addCart= async(req,res)=>{
     const cart = Cart({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity,
        image: req.body.image,
        size:req.body.size
     })
     cart.save().then(result => {
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


 //delete cart 
 const deletecart =  async (req, res) => {
    const id = req.params.id;
    try {
        const deleteData = await Cart.findByIdAndRemove(id)
        res.status(200).json({
            message: "Record Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

 module.exports = {getData , addCart ,deletecart}