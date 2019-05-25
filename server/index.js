const db = require('../db/index.js')
const express = require('express');  
const app = express(); 

let port = 3009;

const bodyParser = require('body-parser');


app.use(express.static(__dirname + '../db/index.js'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/meta-data', function (req, res) {
  res.send('Hello World');
})


app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
