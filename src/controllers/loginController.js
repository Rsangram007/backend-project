const userModel = require("../models/userModel")
const jwt = require('jsonwebtoken')

const loginUser = async function (req, res) {
    let { emailId } = req.body
    let { password } = req.body
    let userCheck = await userModel.findOne({ emailId: emailId, password: password })
    if (!userCheck) { return res.send("Incorrect userID or password.") }

    let token = jwt.sign(
        {
            userID: userCheck._id.toString(),
            platform: "education"
        },
        "I am learning the creation of jwt"
    )
    res.send({ status: true, token: token })
}

module.exports.loginUser = loginUser