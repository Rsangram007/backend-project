const userModel = require('../models/userModel')
const jwt = require("jsonwebtoken")


// const authenticate = function (req, res, next) {

//     try {
//         let token = req.headers["x-Auth-token"];
//         if (!token) token = req.headers["x-auth-token"];
//         if (!token) return res .status(401).send({ status: false, msg: "token must be present" });
//         let decodedToken = jwt.verify(token, "Monika is my Girlfriend")
//         if (!decodedToken) { return res.status(403).send("Not a valid token") }
//         req.longinuser = decodedToken.userId
//         next()
//     }
//     catch (error) {

//         res.status(500).send({ msg: "invlide" })
//     }


// }

// const authorise = function (req, res, next) {
//     // comapre the logged in user's id and the id in request
//     try {
//         let requesteduserid = req.params.userId
//         if (requesteduserid !== req.longinuser) {
//             return res.status(404).send({ status: false, msg: "permission denied" })
//         }
//         next()
//     } catch (error) {
//         return res.status(500).send({ msg: "invlide user id" })
//     }

// }



const authenticate = function (req, res, next) {

    try {
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
        if (!token) return res .status(401).send({ status: false, msg: "token must be present" });
        let decodedToken = jwt.verify(token, "Monika is my Girlfriend")
        if (!decodedToken) { return res.status(403).send("Not a valid token") }
        req.longinuser = decodedToken.userId
        next()
    }
    catch (error) {

        res.status(500).send({ msg: "invlide" })
    }


}

const authorise = function (req, res, next) {
    // comapre the logged in user's id and the id in request
    try {
        let requesteduserid = req.params.userId
        if (requesteduserid !== req.longinuser) {
            return res.status(404).send({ status: false, msg: "permission denied" })
        }
        next()
    } catch (error) {
        return res.status(500).send({ msg: "invlide user id" })
    }

}




module.exports.authenticate = authenticate
module.exports.authorise = authorise



// module.exports.authenticate = authenticate
// module.exports.authorise = authorise