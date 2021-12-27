const mongoose = require('mongoose')

const CartSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Please Enter Name'
    },
    category:{
        type:String,
        required: 'Please Enter Category'
    },
    price:{
        type:Number,
        required: 'Please Enter Price'
    },
    size:{
        type:String,
        require:'Please Enter Size'
    },
    quantity:{
        type:Number,
        required:'Please Enter quantity'
    },
    image:{
        type:String,
        required: 'Please Select Image'
    }
}, { timestamps: true });

module.exports = mongoose.model('Cart', CartSchema)