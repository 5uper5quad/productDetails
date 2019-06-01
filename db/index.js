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
 
 
 
//  let spQuery = SinglePlayer.findOne({ 'type' : 'singlePlayer'}, 'image title', function(err, spGame){
//    if(err) return handleError(err);
//    //would like to return: spGame.image and spGame.title here...
//    return spGame ;
//  })
 
 

// comment out the helper functions. 
//generate data, console.log it, add to database look at it using mongo shell commands.
//start off with one Schema, find a way to auto-generate the documents
// .save()  connect-save-disconnect 
// use the mongo commands to see if it even worked.
// google seeding script to add to package.json



module.exports = LanguageFeatures;

