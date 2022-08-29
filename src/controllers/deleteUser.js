const userModel = require('../models/userModel')


const deleteDetails = async function (req, res) {
    let userId = req.params.userId
    let update = await userModel.findByIdAndUpdate({ _id: userId }, { isDeleted: true }, { new: true })
    res.send(update)
}

module.exports.deleteDetails = deleteDetails