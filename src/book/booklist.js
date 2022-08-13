const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    Authorname:String,
    Bookname:String,
    Catagory:{
        type:String,
        enum:["adventure","fantasy","crime","thriller","action"]
    },
    Year:Number

},{timestamps:true})
   
module.exports =mongoose.model("Bookdatabase",bookSchema)  