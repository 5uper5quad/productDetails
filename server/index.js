const LanguageFeatures = require('../db/index')
const express = require('express');  
const app = express(); 

let port = 3009;

const bodyParser = require('body-parser');

var path = __dirname + "./../public"
console.log("path" ,path)
app.use(express.static(__dirname + "./../public"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


// app.get('/games', (req,res) => {
//   LanguageFeatures.find({ } ,(err, result) => {
//     if(err) console.log("i got an error", err)
//     else{
//       res.send(result);
//     }
//   })
// })

app.get('/games/:id', (req, res) => {
  LanguageFeatures.find({ id: req.params.id }, (err, result)=> {
    if(err) console.log("++++index.js app.get ", err)
    res.send(result[0]);
  });
});


app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
