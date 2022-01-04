//In this file we create Authentication (JWT) Token
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
     firstname: {
          type: String,
          required: 'Please enter first name'
     },
     lastname: {
          type: String,
          required: 'Please enter last name'
     },
     username: {
          type: String,
          required: 'Please enter username',
          unique: true
     },
     phone: {
          type: Number,
          required: 'Please enter phone number',
     },
     email: {
          type: String,
          required:'Please enter email'
     },
     password: {
          type: String, 
          required: 'Please enter password'
     }
},
{
     timestamps: true,
});

// we will create a new connection

const User = new mongoose.model('User', userSchema);
module.exports = User;