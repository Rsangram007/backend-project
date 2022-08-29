const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
     firstName: String,
    // lastName: String,
    // mobile: {
    //     type: String,

    //     required: true
    // },
    // emailId: String,
    // password: String,
    // gender: {
    //     type: String,
    //     enum: ["male", "female", "other"]
    // },
    // age: Number,
   
}, { timeStamps: true });

module.exports = mongoose.model('Name', userSchema)
