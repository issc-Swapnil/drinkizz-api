const mongoose = require('mongoose')

const WishlistSchema = mongoose.Schema({
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
    rating:{
        type:Number,
        required: 'Please Enter ratings'
    },
    image:{
        type:String,
        required: 'Please Select Image'
    }
}, { timestamps: true });

module.exports = mongoose.model('Wishlist', WishlistSchema)