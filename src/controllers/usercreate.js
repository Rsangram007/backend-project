const usermodel = require("../models/userdocmodel")



const createuser = async function (req, res) {
    let data = req.body
    let savedData = await usermodel.create(data)
    res.send({ data: savedData })
}

module.exports.createuser = createuser