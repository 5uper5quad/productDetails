const pg = require('pg');
const connection = 'postgres://glofishh:shallnotpass@localhost:5432/sdcpostgres';

const client = new pg.Client(connection);
client.connect((err, connection) => {
  if (err) console.log(err);
  else console.log('sdcpostgres successfully connected!');
});

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  console.log(res.rows.length) // 1
  client.end()
});


// CREATE TABLE languages
// (
//   id            int PRIMARY KEY
//   English       text [],
//   Spanish       text [],
//   French        text [],
//   Navajo        text [],
//   Mandarin      text []
// );

//given id, return supported languages
const find = (id, callback) => {
};

//edit list of supported languages
const update = (language, callback) => {

};

//add new list of supported languages
const insert = (language, callback) => {

};

//delete supported languages at id
const remove = () => {

};


module.exports = { find, update, insert, remove };