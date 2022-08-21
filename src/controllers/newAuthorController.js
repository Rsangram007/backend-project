const authorModel= require("../models/newAuthor")


const newAuthor= async function (req, res) {
    let book = req.body
    let bookCreated = await authorModel.create(book)
    res.send({data: bookCreated})
}


const authorid= async function (req, res) {
    let input=req.body
    let data =input.authorid
    let savedata=await authorModel.find()
    res.send({data: books})
}

module.exports.newAuthor=newAuthor
module.exports.authorid=authorid