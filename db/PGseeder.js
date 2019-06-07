const faker = require('faker');
const fs = require('fs');


let count = 0;
const product = {};
product.id = count;
product.English = { interface: faker.random.boolean(), 
                    full_audio: faker.random.boolean(),
                    subtitles: faker.random.boolean(),
                  };
product.Spanish = { interface: faker.random.boolean(), 
                    full_audio: faker.random.boolean(),
                    subtitles: faker.random.boolean(),
                  };
product.French = { interface: faker.random.boolean(), 
                    full_audio: faker.random.boolean(),
                    subtitles: faker.random.boolean(),
                  };
product.Navajo = { interface: faker.random.boolean(), 
                    full_audio: faker.random.boolean(),
                    subtitles: faker.random.boolean(),
                  };
product.Mandarin = { interface: faker.random.boolean(), 
                    full_audio: faker.random.boolean(),
                    subtitles: faker.random.boolean(),
                  };
count++;

const testingThingy = () => {
  let thingy = 0;
  while (thingy < 10) {
    console.log(faker.random.boolean());
  thingy++;
  }
}
testingThingy();