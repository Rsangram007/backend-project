const authorModel= require("../models/newAuthor")


const newAuthor= async function (req, res) {
    let book = req.body
    let bookCreated = await authorModel.create(book)
    res.send({data: bookCreated})
}




module.exports.newAuthor=newAuthor
