const bookmodel = require('../models/newBook')
const authormodel = require("../models/newAuthor")
const publisherModel = require("../models/newPublisher")


const newBook = async function (req, res) {
     
    let book = req.body.author
    if (!book) res.send("Author id required")
    let publisher = req.body.publisher
    if (!publisher) res.send("Publisherid required")
    let authorid = await authormodel.find({ _id: book })
    if (!authorid) res.send("Not a valied id")
    let publisherid = await publisherModel.find({ _id: publisher })
    if (!publisherid) res.send("Not a valid publisher id")
    else {
        let books = await bookmodel.create(book)
        res.send(books)
    }
}
const newBooks = async function (req, res) {
    let data = req.body
    let author = req.body.author
    let publisher = req.body.publisher
    let authorid = await authormodel.find({ _id: author })
    let publisherid = await publisherModel.find({ _id: publisher })
    if (!author) {
        res.send("Author ID is required.")
    }
    else if (!authorid[0]) {
        res.send("Not a valid author ID.")
    }
    else if (!publisher) {
        res.send("Publisher ID is required.")
    }
    else if (!publisherid[0]) {
        res.send("Not a valid publisher ID.")
    }
    else {
        let book = await bookmodel.create(data)
        res.send(book)
    }

}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookmodel.find().populate(["publisher", 'author'])
    res.send({ data: specificBook })

}
module.exports.newBooks = newBooks
module.exports.newBook = newBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
