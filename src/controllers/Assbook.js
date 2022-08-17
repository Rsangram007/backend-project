const Assinment = require("../models/bookModel")



const createUser = async function (req, res) {
    let data = req.body
    let savedData = await Assinment.create(data)
    res.send({ msg: savedData })
}

const getUsersData = async function (req, res) {
    let allUsers = await Assinment.find().select({ BookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: allUsers })
}



const getBooksInYear = async function (req, res) {
    let allBooks = await Assinment.find({ Year: 2023})
    res.send({ msg: allBooks })
}


const getParticularBooks = async function (req, res) {
    let input=req.body
    let particularBook = await Assinment.find(input)
    res.send({ msg: particularBook })
}



const getXINRBooks= async function(req,res){
    
    let allBooks= await Assinment.find(({"Prices.indianPrice":"RS 600"}))
    res.send({msg: allBooks})
}


const getRandomBooks = async function (req, res) {
        let RandomBooks = await Assinment.find({ $and: [{ StockAvailable: true }, { Totalpage: 600 }] }, {
            BookName: 1, _id: 0,
            Totalpage: 1, StockAvailable: 1
        }).count()
        res.send({ msg: RandomBooks })}

 




module.exports.QUSONE = createUser
module.exports.QUSTWO = getUsersData
module.exports.QUSTHREE = getBooksInYear
module.exports.QUSFOUR=getParticularBooks
module.exports.QUSFIVE=getXINRBooks
module.exports.QUSSIX=getRandomBooks
