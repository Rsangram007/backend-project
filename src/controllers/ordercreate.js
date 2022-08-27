const ordermodel = require("../models/orderdocmodel")
const productModel = require("../models/productdocmodel")
const userModel = require("../models/userdocmodel")

const createorder = async function (req, res) {
    let data = req.body
    let savedData = await ordermodel.create(data)
    res.send({ data: savedData })
}

const Order = async function (req, res) {
    let data = req.body
    let UA = data.userId
    let PA = data.productId
    let freeuser = data.isFreeAppUser
    let valiedUser = await userModel.findById(UA).select({ _id: 1 })
    let valiedProduct = await productModel.findById(PA).select({ _id: 1 })
    if (!UA || !valiedUser) {
        let msgUA = !UA ? " UserID is Required" : "Enter a valied User ID";
        return res.send(msgUA)
    } else if (!PA || !valiedProduct) {
        let msgPA = !PA ? "Product ID is Required" : "Enter a valied Product ID";
        return res.send(msgPA)
    } else if (freeuser !== 'true') {
        console.log("this user is not freeAppUser")
        let orderAmount = await productModel.findById(PA).select({ price: 1, _id: 0 })
        data.amount = orderAmount.price
        let userBalance = await userModel.findById(UA).select({ balance: 1, _id: 0 })
        userBalance = userBalance.balance
        if (userBalance > data.amount) {
            let savedData = await ordermodel.create(data)
            let updateUser = await userModel.findByIdAndUpdate({ _id: UA }, { $inc: { balance: -data.amount } }, { new: true }).select({ balance: 1, _id: 0 })
            console.log(updateUser)
            return res.send({ msg: savedData })
        }
        return res.send({ msg: "In saficent balance" })
    }
    data.amount = 0
    let savedData = await ordermodel.create(data)
    res.send({ msg: savedData })
}


const orderdetails = async function (req, res) {
    let savedata = req.body
    let freeAppUser = req.headers.isFreeAppUser
    let findUser = await userModel.findById({ _id: savedata.userId })
    if (!findUser) return res.send({ status: false, msg: "userid is invlide" })
    let findproduct = await productModel.findById({ _id: savedata.productId })
    if (!findproduct) return res.send({ status: false, msg: "produsct is invlid" })

    if (freeAppUser == "false") {
        if (findUser.balance >= data.amount) {
            let ordercreated = await ordermodel.create(data)
            let update = await userModel.updateOne(({ _id: findUser }), { $inc: { balance: -savedata.amount } })
            let update1 = await userModel.updateOne({ _id: findUser }, { $set: { isFreeAppUser: freeAppUser } })
            return res.send({ msg: ordercreated })
        } else if (findUser.balance <= data.amount) {
            return res.send({ status: true, msg: "the user doesnt have money" })

        }

    } else if (freeAppUser == "true") {
        let ordercreated = await ordermodel.create(data)
        let update = await ordermodel.updateOne({ _id: ordercreated._id }, { $set: { amount: 0 } })
        ordercreated["isFreeAppUser"] = freeAppUser
        return res.send({ data: ordercreated })
    }
}


const createOrder = async function(req,res) {
    let userId = req.body.userId
    let productId = req.body.productId
    let uniqueUser = await userModel.findById(userId)
    let uniqueProduct = await productModel.findById(productId)
    let freeuser = req.headers.isfreeappuser
    if (!uniqueUser || !uniqueProduct) {
        res.send({msg:"either of the user or product not present"})
    }
    else if(freeuser==="true") {
        req.body["amount"] = 0
        req.body["isFreeAppUser"] = true
      let  Order = await ordermodel.create(req.body)
        res.send({msg:Order})
    } else if (freeuser=="false") {
        let productPrice = await productModel.findById(productId).select({price:1,_id:0})
        let userPrice = await userModel.findById(userId).select({balance:1,_id:0})
        let finalPrice = userPrice.balance-productPrice.price
        let updateUserPrice = await userModel.findByIdAndUpdate(userId,{balance:finalPrice})
        req.body["amount"] = productPrice.price
        req.body["isFreeAppUser"] = false
      let  Order = await ordermodel.create(req.body)
        res.send({msg:Order})

    }
    
}


module.exports.Order = Order
module.exports.createorder = createorder
module.exports.orderdetails = orderdetails
module.exports.createOrder = createOrder