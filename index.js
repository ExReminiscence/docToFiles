const _ = require('lodash');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require("fs"));

const fire = async () => {
  const text = await fs.readFileAsync(`./1.txt`, 'utf8');
  const textArray = _.split(text, '#*#');
  await Promise.map(textArray, async (item, index, len) => {
    try {
      await fs.writeFileAsync(`./result/${index}.txt`, item);
      console.log(`created file ${index}/${len}`);
    } catch (error) {
      console.log(error);
    }
  })
};

fire();