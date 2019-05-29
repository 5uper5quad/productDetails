const LanguageFeatures = require('../db/index')
const express = require('express');  
const app = express(); 

let port = 3009;

const bodyParser = require('body-parser');


app.use(express.static(__dirname + '../db/index.js'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/:id', (req, res) => {
  let requestedData = req.params.id;
  LanguageFeatures.find({ id: requestedData}, (err, result)=> {
    res.send(result[0]);
  });
});


app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
