const mongoose = require('mongoose');
var db  = mongoose.createConnection('mongodb://localhost:27017/meta-data', { useNewUrlParser: true });

// var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));



var Schema = mongoose.Schema;

  var languageFeatures = new Schema(
    {
      id: Number,
      English:{ interface: Boolean, full_audio: Boolean, subtitles: Boolean},
      Spanish:{ interface: Boolean, full_audio: Boolean, subtitles: Boolean},
      French:{ interface: Boolean, full_audio: Boolean, subtitles: Boolean},
      Navajo:{ interface: Boolean, full_audio: Boolean, subtitles: Boolean},
      Mandarin:{ interface: Boolean, full_audio: Boolean, subtitles: Boolean}
      
    }
  );



var LanguageFeatures = db.model('LanguageFeatures', languageFeatures);



module.exports = LanguageFeatures;

