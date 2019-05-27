const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meta-data', {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));



var Schema = mongoose.Schema;

  var singlePlayerGame = new Schema({
    title:  String,
    image: String,
    // want to figure out how to add an image here
    type: String,
    body:   String,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

  
  var multiPlayerGame = new Schema({
    title:  String,
    type: String,
    body:   String,
    image: String,  
    // want to figure out how to add an image here
    meta: {
      votes: Number,
      favs:  Number
    }
  });
  
 var SinglePlayer = mongoose.model('SinglePlayer', singlePlayerGame);
 var MultiPlayer = mongoose.model('Multiplayer', multiPlayerGame);
 
 
 let spQuery = SinglePlayer.findOne({ 'type' : 'singlePlayer'}, 'image title', function(err, spGame){
   if(err) return handleError(err);
   //would like to return: spGame.image and spGame.title here...
   return spGame ;
 })
 
 
 let mpQuery = MultiPlayer.findOne({ 'type' : 'multiPlayer'}, 'image title', function(err, mpGame){
  if(err) return handleError(err);
  //would like to return: mpGame.image and mpGame.title here...
  return mpGame ;
})

module.exports.spQuery = spQuery;
module.exports.mpQuery = mpQuery;
module.exports.SinglePlayer = SinglePlayer;
module.exports.MultiPlayer = MultiPlayer;

