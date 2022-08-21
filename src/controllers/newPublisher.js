const publisherModel=require("../models/newPublisher")



const newP= async function (req, res) {
    let book = req.body
    let bookCreated = await publisherModel.create(book)
    res.send({data: bookCreated})
}

module.exports.new = newP