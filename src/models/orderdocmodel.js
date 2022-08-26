const mongoose = require('mongoose');
const objectid = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema({

    userId: {
        type: objectid,
        ref: "userdoc"
    },
    productId: {
        type: objectid,
        ref: "prodoc"
    },
    amount: Number,
    date: String

}, { timestamps: true });


module.exports = mongoose.model('orddoc', orderSchema) //users
