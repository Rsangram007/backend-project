const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

// app.get('/sol1',function(req,res){
//     let arr = [1,2,3,5,6,7]
//     let sum=0
//   for(i = 0; i < arr.length; i++) {
//       sum += arr[i]
//   }
//         n=arr.pop()
//        let missingNumber=((n*(n+1))/2)-sum
//        res.send({ data: missingNumber } )
//    })
    
   app.get('/sol2',function(req,res){
    let arr= [33, 34, 35, 37, 38]
    let len=arr.length
    let total=0
     for(var i in arr){
     total +=arr[i]
     }
     let firstno=arr[0]
     let lastno=arr.pop()
     let consicutivesum=(len+1) *(firstno+lastno)/2
     themissingno=consicutivesum-total

     res.send(  { data: themissingno  }  );
})