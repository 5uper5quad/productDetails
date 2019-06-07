const db = require('../db/index')
const express = require('express');  
const app = express(); 

let port = 3009;

const bodyParser = require('body-parser');

var path = __dirname + "./../public"
console.log("path" ,path)
app.use(express.static(__dirname + "./../public"))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


//getall
app.get('/productDetails', (req,res) => {
  db.find({ } ,(err, data) => {
    if(err) res.send(err);
    else res.send(data);
  })
});

//get at id
app.get('/productDetails/:id', (req, res) => {
  db.find(req.params.id, (err, data) => {
    if(err) res.send(err);
    res.send(data[0]); //<--data.rows eventually for postgres
  });
});

//post at id
app.post('/productDetails/:id', (req, res) => {
  const product = req.body;
  db.add(product, (err, data) => {
    if(err) res.send(err);
    else res.send(data);
  });
});

//put at id
app.put('/productDetails/:id', (req, res) => {
  const product = req.body;
  db.update(product, (err, data) => {
    if (err) res.send(err);
    else res.send(data);
  });
});

//delete at id
app.delete('/productDetails/:id', (req, res) => {
  db.remove(req.params.id, (err, data) => {
    if(err) res.send(err);
    else res.send(data);
  });
});


app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
