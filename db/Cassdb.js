const cassandra = require('cassandra-driver');
var async = require('async');

const connection = { contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'languagefeatures' };
const client = new cassandra.Client(connection);

client.connect((err, connection) => {
  if (err) console.log(err);
  else console.log('cassandra successfully connected!');
});

// CREATE TABLE languagefeatures.games (
//  id          int PRIMARY KEY,
//  game_name   text,
//  english     map<text, boolean>,
//  spanish     map<text, boolean>,
//  french      map<text, boolean>,
//  navajo      map<text, boolean>,
//  mandarin    map<text, boolean>
// );

//  {'full_audio' : boolean, 'interface' : boolean, 'subtitles' : boolean}


const languageParams = (language) => {
  let languageString = JSON.stringify(language);
  // languageObj = languageString.slice(1, -1);
  return languageString;
}

// let test = {
//   '\"full_audio\"': false,
//   '\"interface\"': false,
//   '\"subtitles\"': true
// };
//console.log(languageParams(test));
//{"\"full_audio\"":false,"\"interface\"":false,"\"subtitles\"":true}


const find = (id, callback) => {
  const query = `SELECT * FROM languagefeatures.games WHERE id =${id}`;
  client.execute(query, (err, result) => {
    if (err) callback(err, null);
    else callback(null, result);
  })
};

const add = (game, callback) => {
// INSERT INTO languagefeatures.games (id,game_name,english,spanish,french,navajo,mandarin) VALUES (10000001,'sykrim',{'"full_audio"': False, '"interface"': True, '"subtitles"': False},{'"full_audio"': False, '"interface"': True, '"subtitles"': False},{'"full_audio"': False, '"interface"': True, '"subtitles"': False},{'"full_audio"': False, '"interface"': True, '"subtitles"': False},{'"full_audio"': False, '"interface"': True, '"subtitles"': False});

  client.execute(`INSERT INTO languagefeatures.games (id, game_name, english, spanish, french, navajo, mandarin) VALUES (${game.id}, '${game.game_name}', '${languageParams(game.english)}', '${languageParams(game.spanish)}', '${languageParams(game.french)}', '${languageParams(game.navajo)}', '${languageParams(game.mandarin)}')`, (err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  });
};

const update = (game, callback) => {
  client.execute(`INSERT INTO languagefeatures.games (id, game_name, english, spanish, french, navajo, mandarin) VALUES (${game.id}, '${game.game_name}', '${languageParams(game.english)}', '${languageParams(game.spanish)}', '${languageParams(game.french)}', '${languageParams(game.navajo)}', '${languageParams(game.mandarin)}')`, (err, data) => {
    if (err) callback(err, null);
    else callback(null, data);
  });
};

const remove = (id, callback) => {
  const query = `DELETE FROM languagefeatures.languaged WHERE id =${id} IF EXISTS`;
  client.execute (query, (err, result) => {
    if (err) callback(err, null);
    else callback (null, result);
  });
};


module.exports = { find, update, add, remove };