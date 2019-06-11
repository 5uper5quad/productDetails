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


CREATE TABLE languages (
id                      int PRIMARY KEY,
english_interface       bool,
english_full_audio      bool,
english_subtitles       bool,
spanish_interface       bool,
spanish_full_audio      bool,
spanish_subtitles       bool,
french_interface        bool,
french_full_audio       bool,
french_subtitles        bool,
navajo_interface        bool,
navajo_full_audio       bool,
navajo_subtitles        bool,
mandarin_interface      bool,
mandarin_full_audio     bool,
mandarin_subtitles      bool
);

//show tables in current schema
//  \dt
\copy languages FROM
'/Users/gloria/HRR38/SDC/sdc-productDetails/allTheData.csv' WITH DELIMITER ',' CSV

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