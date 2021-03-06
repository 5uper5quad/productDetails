const os = require('os');
const cluster = require('cluster');

if (cluster.isMaster) {
  //master process
  const n_cpus = os.cpus().length;
  console.log(`forking ${n_cpus} CPUs`);
  for (let i = 0; i < n_cpus; i++) {
    cluster.fork();
  }
} else {


//worker process
//=====================================
  // const db = require('../db/PGdb.js');
  const db = require('../db/Cassdb.js');
  const express = require('express');
  const bodyParser = require('body-parser');
  const path = require('path');
  const cors = require('cors');


  const app = express(); 
  const port = process.env.PORT || 3009;

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });

  app.use(express.static(path.join(__dirname, '../public')));
  app.use('/:id', express.static('public'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cors());


  //get at id
  app.get('/languageFeatures/:id', (req, res) => {
    db.find(req.params.id, (err, data) => {
      if(err) res.send(err);
      else res.send(data.rows);
    });
  });

  //post at id
  app.post('/languageFeatures/:id', (req, res) => {
    const game = req.body;
    db.add(game, (err, data) => {
      if(err) res.send(err);
      else res.send(data);
    });
  });

  //put at id
  app.put('/languageFeatures/:id', (req, res) => {
    const game = req.body;
    db.update(game, (err, data) => {
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

module.exports = app;

}