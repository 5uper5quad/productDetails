const db = require('../db/PGdb.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express(); 
const port = process.eng.PORT || 3009;

app.use(express.static(path.join(__dirname, '../public')));
app.use('/:id', express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());


//getall
app.get('/languageFeatures', (req,res) => {
  db.find({ } ,(err, data) => {
    if(err) res.send(err);
    else res.send(data);
  })
});

//get at id
app.get('/languageFeatures/:id', (req, res) => {
  db.find(req.params.id, (err, data) => {
    if(err) res.send(err);
    res.send(data[0]); //<--data.rows eventually for postgres
  });
});

//post at id
app.post('/languageFeatures/:id', (req, res) => {
  const product = req.body;
  db.add(product, (err, data) => {
    if(err) res.send(err);
    else res.send(data);
  });
});

//put at id
app.put('/languageFeatures/:id', (req, res) => {
  const product = req.body;
  db.update(product, (err, data) => {
    if (err) res.send(err);
    else res.send(data);
  });
});

//delete at id
app.delete('/languageFeatures/:id', (req, res) => {
  db.remove(req.params.id, (err, data) => {
    if(err) res.send(err);
    else res.send(data);
  });
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;