const userModel = require('../models/userModel')
const jwt = require("jsonwebtoken")


const authenticate = function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "Monika is my Girlfriend")
    if (!decodedToken) { return res.send("Not a valid token") }
    req.longinuser = decodedToken.userId

    next()
}

const authorise = function (req, res, next) {
    // comapre the logged in user's id and the id in request
    let requesteduserid = req.params.userId
    if (requesteduserid !== req.longinuser) {
        return res.send({ status: false, msg: "permission denied" })
    }
    next()
}


module.exports.authenticate = authenticate
module.exports.authorise = authorise