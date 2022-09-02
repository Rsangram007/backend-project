let axios = require('axios');
let getwether = async function (req, res) {
    try {
        let city = ["Bengaluru", "mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityarry = []
        for (let index = 0; index < city.length; index++) {
            let object = { cities: city[index] };
            let gettemp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city[index]}&appid=8da9dbb65f3268acdf9011a1f046ae82 `)
            object.temp = gettemp.data.main.temp
            cityarry.push(object)
        }
        let sorted=cityarry.sort( function (a, b) {return a.temp - b.temp})
        res.status(200).send({status:"ok",data:sorted})
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
} 
module.exports.getwether = getwether