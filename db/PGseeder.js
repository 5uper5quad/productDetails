const faker = require('faker');
const fs = require('fs');


const seed = () => {
  let count = 0;
  while (count < 10000000) {
    let dataString = '';
    let tenThousand = 0;
    var start = Date.now(); //start timer
    while (tenThousand < 10000) {
      dataString += count + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean() + ',';
      dataString += faker.random.boolean();
      dataString += '\n';
      count++;
      tenThousand++;
    }
    let test = dataString;
    fs.appendFileSync('./csv/allTheData.csv', test);
  // while (count < 100) {
  //   let data = '';
  //   let tenThousand = 0;
  //   while (tenThousand < 10) {
  //     data += JSON.stringify(dataString);
  //     count++;
  //     tenThousand++;
  //   }
  //   fs.appendFileSync('./allTheData.csv', data);
  // }
  }
  console.log(count);
  var millis = Date.now() - start;
  console.log('seconds elapsed = ' + Math.floor(millis / 1000));
};

seed();

const testingThingy = () => {
  let thingy = 0;
  while (thingy < 10) {
    console.log(faker.random.boolean());
  thingy++;
  }
}
testingThingy();