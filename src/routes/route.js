const express = require('express');
const { welcome } = require('./intro.js');
const router = express.Router();
const path =require("../logger/logger" )
const path_1 =require("../util/helper")
const path_3=require("../validator/formatter.js")



router.get('/test-you', function(req, res){
    path.titu()
    path_1.printDate()
    path_3.raja()
    res.send('I LOVE MOM')

})

router.get('/give-me-students-data',function(req, res){
    

})
module.exports = router;
// adding this comment for no reason