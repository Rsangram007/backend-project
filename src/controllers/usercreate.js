const { count } = require("console")
const { nextTick } = require("process")
const { isFreeAppUser } = require("../middlewares/assinmentmiddleware")
const usermodel = require("../models/userdocmodel")



const createuser = async function (req, res) {
    let data = req.body
    let savedData = await usermodel.create(data)
    res.send({ data: savedData })
}

module.exports.createuser = createuser