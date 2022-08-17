const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });


// module.exports = mongoose.model('Book', bookSchema) //users

//Validation://require:true//unique// default//String//Number//Date//Boolean// Arrays// Object// ObjectId// Buffer - not cover

const BookSchema=new mongoose.Schema({
 BookName:String,
 authorName:String,
 Totalpage:Number,
 StockAvailable:Boolean,
 Tags:[String],
 Year:Number,
 Prices:{
    indianPrice:String,
    europeprice:String
 }
},{timestamps:true})

module.exports=mongoose.model("Assinmets",BookSchema)