const fs = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, 'input.txt');

async function readAndParseFile() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readAndParseFile();
