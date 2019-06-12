const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'languagefeatures' });

// CREATE TABLE languagefeatures.languages (
//   id                      int PRIMARY KEY,
//   english_interface       boolean,
//   english_full_audio      boolean,
//   english_subtitles       boolean,
//   spanish_interface       boolean,
//   spanish_full_audio      boolean,
//   spanish_subtitles       boolean,
//   french_interface        boolean,
//   french_full_audio       boolean,
//   french_subtitles        boolean,
//   navajo_interface        boolean,
//   navajo_full_audio       boolean,
//   navajo_subtitles        boolean,
//   mandarin_interface      boolean,
//   mandarin_full_audio     boolean,
//   mandarin_subtitles      boolean
// );

const find = (id, callback) => {
//client.execute
};

const update = (language, callback) => {
//client.execute
};

const insert = (language, callback) => {
//client.execute
};

const remove = (id, callback) => {
//client.execute
};


module.exports = { find, update, insert, remove };