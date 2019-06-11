const faker = require('faker');
const fs = require('fs');


const seed = () => {
  let count = 0;
  let product = '';
  var start = Date.now(); //start timer
  product += count + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean() + ',';
  product += faker.random.boolean();
  product += '\n';
  // count++;

  let test = product;
  fs.appendFileSync('./allTheData.csv', test);
  // while (count < 100) {
  //   let data = '';
  //   let tenThousand = 0;
  //   while (tenThousand < 10) {
  //     data += JSON.stringify(product);
  //     count++;
  //     tenThousand++;
  //   }
  //   fs.appendFileSync('./allTheData.csv', data);
  // }
  console.log(count);
  var millis = Date.now() - start;
  console.log('seconds elapsed = ' + Math.floor(millis / 1000));
};

// const product = {};
// product.id = count;
// product.English = { interface: faker.random.boolean(), 
//                     full_audio: faker.random.boolean(),
//                     subtitles: faker.random.boolean(),
//                   };
// product.Spanish = { interface: faker.random.boolean(), 
//                     full_audio: faker.random.boolean(),
//                     subtitles: faker.random.boolean(),
//                   };
// product.French = { interface: faker.random.boolean(), 
//                     full_audio: faker.random.boolean(),
//                     subtitles: faker.random.boolean(),
//                   };
// product.Navajo = { interface: faker.random.boolean(), 
//                     full_audio: faker.random.boolean(),
//                     subtitles: faker.random.boolean(),
//                   };
// product.Mandarin = { interface: faker.random.boolean(), 
//                     full_audio: faker.random.boolean(),
//                     subtitles: faker.random.boolean(),
//                   };

seed();

const testingThingy = () => {
  let thingy = 0;
  while (thingy < 10) {
    console.log(faker.random.boolean());
  thingy++;
  }
}
testingThingy();