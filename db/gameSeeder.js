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


//wrap the for loop, randBoolean, insertMany  exit(), into one function
//call it ()
//package.json new seeding script path to gameSeeder.js
//exit function mongoose.disconnect
// console.log(seedArray)

// 



// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties


// Example:

// console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
// outputs: "Marks, Dean Sr."

