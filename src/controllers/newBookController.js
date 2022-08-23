const bookmodel = require('../models/newBook')
const authormodel = require("../models/newAuthor")
const publisherModel = require("../models/newPublisher")

const newBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookmodel.create(book)
    res.send({data: bookCreated})
}
/// (3)
// const newBooks = async function (req, res) {
//     let data = req.body
//     let author = req.body.author
//     let publisher = req.body.publisher
//     let authorid = await authormodel.find({ _id: author })
//     let publisherid = await publisherModel.find({ _id: publisher })
//     if (!author) {
//         res.send("Author ID is required.")
//     }
//     else if (!authorid[0]) {
//         res.send("Not a valid author ID.")
//     }
//     else if (!publisher) {
//         res.send("Publisher ID is required.")
//     }
//     else if (!publisherid[0]) {
//         res.send("Not a valid publisher ID.")
//     }
//     else {
//         let book = await bookmodel.create(data)
//         res.send(book)
//     }

// }
//// or
const newBooks= async function (req, res) {
    let book = req.body

    //3 a)
    if(!book.author) {
        return res.send({status: false, msg: "author id is a mandatory field"})
    }

    //3 b)
    let author = await authormodel.findById(book.author)
    if(!author) {
        return res.send({status: false, msg: "Author id is not valid"})
    }

    //3 c)
    if(!book.publisher) {
        return res.send({status: false, msg: "Publisher id is a mandatory field"})
    }

    // 3 d)
    let publisher = await publisherModel.findById(book.publisher)
    if(!publisher) {
        return res.send({status: false, msg: "Publisher id is not valid"})
    }

    let bookCreated = await bookmodel.create(book)
    res.send({data: bookCreated})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let allBooks = await bookModel.find().populate('author publisher')
    res.send({data: allBooks})

}










///(4)
//const getBooksWithAuthorDetails = async function (req, res) {
    // let specificBook = await bookmodel.find().populate(["publisher", 'author'])
    // res.send({ data: specificBook })

//}
const abc=async function(req,res){
    let total=await authormodel.aggregate([
{$group:{_id:"$authorName",totalno:{$sum:"$rating"}}},{$sort:{totalno:-1}}])
res.send({msg:total})
}
//// 5(a)
const updatepub=async function (req,res){
    let pubid=await publisherModel.find({name:["Penguin","HarperCollins"]}).select({_id:1})
    let updatebook=await bookmodel.updateMany({publisher:pubid},{$set:{isHardCover:true}},{new:true})
    res.send({msg:updatebook,status:true})
}

//// 5(b)
const updateprice=async function (req,res){
    let autid=await authormodel.find({rating:{$gt:3.5}}).select({_id:1})
    let bookpriceupdate=await bookmodel.updateMany({author:autid},{$inc:{price:+10}},{new:true})
    res.send({msg:bookpriceupdate,status:true})
}

module.exports.newBook=newBook
module.exports.newBooks = newBooks
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.abc = abc
module.exports.updatepub =updatepub
module.exports.updateprice =updateprice
