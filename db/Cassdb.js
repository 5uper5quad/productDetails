const cassandra = require('cassandra-driver');
var async = require('async');

const connection = { contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'languagefeatures' };
const client = new cassandra.Client(connection);

client.connect((err, connection) => {
  if (err) console.log(err);
  else console.log('cassandra successfully connected!');
});

// CREATE TABLE languagefeatures.languages (
//  id        int PRIMARY KEY,
//  name      text,
//  english   map<text, boolean>,
//  spanish   map<text, boolean>,
//  french    map<text, boolean>,
//  navajo    map<text, boolean>,
//  mandarin  map<text, boolean>
// );

//  {'full_audio' : boolean, 'interface' : boolean, 'subtitles' : boolean}



//read languages and print to console
// const findFirstEntry = (callback) => {
//   client.execute('SELECT * FROM languages WHERE id=0', (err, result) => {
//     if (!err) {
//       if (result.rows.length > 0) {
//         console.log('yay i made it and found id 0: ' + JSON.stringify(result.rows));
//       } else {
//         console.log('no results :(');
//       }
//     }
//     //run next function in series
//     // callback(err, null);
//   });
// }

// findFirstEntry();
//process.exit();

//get nested items in map 
const mapToItem = (items) => {
  if (Array.isArray(items)) {
    let list = '{';
    items.forEach((item) => {
      //rebuild back into item getting strings and commas
      list += `'${item}',`;
    });
    //get rid of comma
    return `${list.slice(0, -1)}}`;
  }
  return `{${items}}`;
};

const find = (id, callback) => {
  const query = `SELECT * FROM languages WHERE id =${id}`;
  client.execute(query, (err, result) => {
    if (err) callback(err, null);
    else callback(null, result);
  })
};

// read languages and print to console
// const findFirstEntry = (callback) => {
//   client.execute('SELECT * FROM languages WHERE id=0', (err, result) => {
//     if (!err) {
//       if (result.rows.length > 0) {
//         console.log('yay i made it and found id 0: ' + JSON.stringify(result.rows));
//       } else {
//         console.log('no results :(');
//       }
//     }
//     //run next function in series
//     // callback(err, null);
//   });
// }

// findFirstEntry();
// process.exit();

const update = (language, callback) => {
  //need languageParams
  //client.execute - insert into
};

const insert = (language, callback) => {
//languageParams
//client.execute
};

const remove = (id, callback) => {
  const query = `DELETE FROM languagefeatures.languaged WHERE id =${id} IF EXISTS`;
  client.execute (query, (err, result) => {
    if (err) callback(err, null);
    else callback (null, result);
  });
};


module.exports = { find, update, insert, remove };