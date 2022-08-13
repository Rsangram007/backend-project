const UserModel= require("../models/userModel")
const booklist = require("../book/booklist")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }
 const postbooks=async function(req,res){
    let input =req.body
    let createbook= await booklist.create(input)
    res.send({msg:createbook})
 }
 const getbooks=async function(req,res){
    let createbook= await booklist.find()
    res.send({msg:createbook})
 }
// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
 module.exports.postbooks=postbooks
 module.exports.getbooks=getbooks