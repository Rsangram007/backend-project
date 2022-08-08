const express = require('express');
const _ = require('underscore')

const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const formatterModule = require('../validator/formatter') 
const helperModule = require('../util/helper')
const router = express.Router();
const lodash=require("lodash")

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    loggerModule.printInfo()
    formatterModule.trimMyString()
    formatterModule.getUpperCaseString()
    formatterModule.changetoLowerCase()
    helperModule.getTodaysDate()
    helperModule.getCurrentMonth()
    helperModule.printBatchDetails()
    let weekdend = ['Saturday','Sunday','Monday']
    
    let result = _.first(weekdend, 2)

    console.log('Unserscore example resultr is ',result)
    let months=["jan","feb","mar","apr","may","jun","juliy","aug","sep","oct","nov","dec"]
    let result1 =lodash.chunk(months,4)
    console.log(result1)
    let oddnums=[1,3,5,7,9,11,13,15,17,19]
 let r1=lodash.tail(oddnums)
 console.log("before tail function---->",oddnums)
  console.log("after tail function---->",r1)

  let arrnums= [2,6,3,2,2]
  let r2=lodash.union(arrnums)
  console.log("before union function--->")
  console.log("after union function--->",r2)

    let pairaar= [["horror" ,"The Shining"],["drama","Titanic"],["thriller","Shutter Island"], ["fantasy","Pans Labyrinth"]]
    let r3= lodash.fromPairs(pairaar)
    console.log("before fromPaairs function-->",pairaar)
    console.log("after fromPaairs function-->",r3)
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason