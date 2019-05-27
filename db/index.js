const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meta-data', {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));



var Schema = mongoose.Schema;

  var singlePlayerGame = new Schema({
    title:  String,
    image: String,
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
    meta: {
      votes: Number,
      favs:  Number
    }
  });
  
 var SinglePlayer = mongoose.model('SinglePlayer', singlePlayerGame);
 var MultiPlayer = mongoose.model('Multiplayer', multiPlayerGame);
 
 
 let SinglePlayer = SinglePlayer.findOne({ 'type' : 'singlePlayer'}, 'image title', function(err, gameFound){
   if(err) return handleError(err);
   //would like to return: gameFound.image and gameFound.title here...
   return gameFound ;
 })
 
module.exports.SinglePlayer = SinglePlayer;
module.exports.MultiPlayer = MultiPlayer;

