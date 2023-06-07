const fs = require('fs-extra');
const path = require('path');

const folderPath = 'files';
const currentDate = new Date();
const options = currentDate.toUTCString();
const filename = 'time.txt';
const filePath = path.join(folderPath, filename);

fs.ensureDir(folderPath)
  .then(() => fs.appendFile(filePath, options, 'utf8'))
  .then(() => console.log(`Timestamp data added to ${timestamp} successfully.`))
  .catch((err) => console.error('Error adding timestamp data:', err));
