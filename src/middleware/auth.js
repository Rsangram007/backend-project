const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')


const midWare1 = async function (req, res, next) {
    let token = req.headers["x-auth-token"]
    if (!token) { return res.send("Header is missing") }
    let decodedToken = jwt.verify(token, "I am learning the creation of jwt")
    if (!decodedToken) { return res.send("Not a valid token") }
    let userId = req.params.userId
    let idCheck = mongoose.Types.ObjectId.isValid(userId)
    if (!idCheck) { return res.send("Not a valid userID") }
    let check = await userModel.findById(userId)
    if (!check) { return res.send("No such user exist") }
    next()
}

module.exports.midWare1 = midWare1
