const { count } = require("console")
const authormodel=require("../models/Author.js")
const bookmodel=require("../models/Book.js")

 
const createauthor= async function (req, res) {
    let data= req.body
    let input=req.body.author_id
    if(!data== input){
        res.send({msg:"plz enter author id"})
    }
    let savedData= await authormodel.create(data)
    res.send({msg: savedData})
}
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookmodel.create(data)
    res.send({msg: savedData})
}

const chetanbook=async function(req,res){
    let data=await authormodel.find({author_name:"Chetan Bhagat"})
    let chetanid=data[0].author_id
    let booklist=await bookmodel.find({author_id:chetanid})
    res.send({msg:booklist})
}

const authorname=async function(req,res){
    let author=await bookmodel.findOneAndUpdate(({name:"Two states"}),{$set:{price:100}},{new:true,upsert:true},)
    let authornames=await authormodel.find({author_id:author.author_id}).select({author_name:1})
    let price=author.price
    res.send({msg:authornames,price})
}
 const bookprice=async function(req,res){
    let onprice=await bookmodel.find({$gte:50,$lte:100}).select({name:1,author_id:1,_id:0,price:1})
    let abc=onprice.map(x=>x.author_id)
    let newauthor=await authormodel.find({author_id:abc}).select({author_name:1,_id:0})
    res.send({"book&itsprice":onprice,"Authorname":newauthor})
 }


module.exports.author=createauthor
module.exports.book=createBook
module.exports.qustwo=chetanbook
module.exports.qusthree=authorname
module.exports.qusfour=bookprice


