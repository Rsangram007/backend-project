const { count } = require("console")
const productmodel= require("../models/productdocmodel")
   


const createproduct= async function (req, res) {
    let data = req.body
    let savedData= await productmodel.create(data)
    res.send({data: savedData})
}

module.exports.createproduct = createproduct