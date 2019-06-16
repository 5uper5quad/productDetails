require('newrelic');
// const db = require('../db/PGdb.js');
const db = require('../db/Cassdb.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const os = require('os');


const app = express(); 
const port = 3009;
// const port = process.eng.PORT || 3009;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

cpuCount = os.cpus().length;
console.log(cpuCount);

app.use(express.static(path.join(__dirname, '../public')));
app.use('/:id', express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());


//get at id
app.get('/languageFeatures/:id', (req, res) => {
  db.find(req.params.id, (err, data) => {
    if(err) res.send(err);
    res.send(data.rows); //<--data.rows eventually
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


//loadtest http://localhost:3009/ t 20 c 10 rps 500
//loadtest -c 10 --rps 100 http://localhost:3009/languageFeatures

module.exports = app;