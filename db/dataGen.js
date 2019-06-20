const faker = require('faker');
const fs = require('fs');


const randomLanguageSupport = () => {
  let languageSupports = {};
    languageSupports.full_audio = faker.random.boolean();
    languageSupports.interface = faker.random.boolean();
    languageSupports.subtitles = faker.random.boolean();
    return JSON.stringify(languageSupports);
}

const seed = () => {
  let count = 0;
  var start = Date.now(); //start timer
  while (count < 10000000) {
    let dataString = '';
    let tenThousand = 0;
    while (tenThousand < 10000) {
      dataString += `${count}|`;
      dataString += `${faker.commerce.productName()}|`;
      dataString += `${randomLanguageSupport()}|`;
      dataString += `${randomLanguageSupport()}|`;
      dataString += `${randomLanguageSupport()}|`;
      dataString += `${randomLanguageSupport()}|`;
      dataString += `${randomLanguageSupport()}`;
      dataString += '\n';
      count++;
      tenThousand++;
    }
    let test = dataString;
    fs.appendFileSync('./csv/allTheData.csv', test);
  }
  console.log(count);
  var millis = Date.now() - start;
  console.log('seconds elapsed = ' + Math.floor(millis / 1000));
};

// seed();

const testingThingy = () => {
  let thingy = 0;
  while (thingy < 10) {
    console.log(randomLanguageSupport());
  thingy++;
  }
}
testingThingy();