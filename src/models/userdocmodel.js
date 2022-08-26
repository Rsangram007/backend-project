const mongoose = require('mongoose');
const { isFreeAppUser } = require('../middlewares/assinmentmiddleware');

const userdocmodelSchema = new mongoose.Schema({
    name: String,
    balance:
    {
        type: Number,
        default: 100
    },
    address: { type: String },
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    }

}, { timestamps: true });

module.exports = mongoose.model('userdoc', userdocmodelSchema)
