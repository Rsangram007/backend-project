const userModel = require('../models/userModel')


const userDetails = async function (req, res) {
    let userId = req.params.userId
    let getDetails = await userModel.findById(userId)
    res.send(getDetails)
}

module.exports.userDetails = userDetails