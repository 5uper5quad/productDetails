const faker = require('faker');
const fs = require('fs');


const seed = () => {
  let count = 0;
  let test = {};
  var start = Date.now(); //start timer
  test.entry = count;
  test.entry1 = { input: faker.random.boolean(),
                  input: faker.random.boolean(),
                  input: faker.random.boolean()
                },
  test.entry2 = { input: faker.random.boolean(),
                  input: faker.random.boolean(),
                  input: faker.random.boolean()
                },
  test.entry3 = { input: faker.random.boolean(),
                  input: faker.random.boolean(),
                  input: faker.random.boolean()
                },
  test.entry4 = { input: faker.random.boolean(),
                  input: faker.random.boolean(),
                  input: faker.random.boolean()
                },
  test.entry5 = { input: faker.random.boolean(),
                  input: faker.random.boolean(),
                  input: faker.random.boolean()
                }

  while (count < 10000000) {
    let data = '';
    let tenThousand = 0;
    while (tenThousand < 10000) {
      data += test;
      count++;
      tenThousand++;
    }
    fs.appendFileSync('./allTheData.csv', data);
  }
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