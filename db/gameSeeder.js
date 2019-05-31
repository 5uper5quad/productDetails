var LanguageFeatures  = require('./index')
var faker = require('faker');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meta-data');

 


var seedArray = [];

function exit(){
    mongoose.disconnect();
  }


var seederFunction = () => {
  var randBoolean = () => {
    return faker.random.boolean()
  }
  
  for (var i = 1; i <= 100; i++){
  
    seedArray.push(
    {
      id: i,
      English:{ interface: randBoolean(), full_audio: randBoolean(), subtitles: randBoolean()},
      Spanish:{ interface: randBoolean(), full_audio: randBoolean(), subtitles: randBoolean()},
      French:{ interface: randBoolean(), full_audio: randBoolean(), subtitles: randBoolean()},
      Navajo:{ interface: randBoolean(), full_audio: randBoolean(), subtitles: randBoolean()},
      Mandarin:{ interface: randBoolean(), full_audio: randBoolean(), subtitles: randBoolean()}
      
    })
  }
  
  LanguageFeatures.insertMany(seedArray, function(err){
    if(err) return console.log(err)
     exit()
  });
}

seederFunction();


