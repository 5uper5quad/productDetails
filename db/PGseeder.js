const faker = require('faker');
const fs = require('fs');


const seed = () => {
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

  while (count < 10000000) {
    let data = '';
    let hundredThousand = 0;
    while (hundredThousand < 100000) {
      data += JSON.stringify(product);
      count++;
    }
    fs.appendFileSync('./allTheData.tsv', data);
  }
  console.log(count);
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