const fs = require('fs-extra');
const path = require('path');

const folderPath = 'files'; // Specify the folder path including the parent directory
const currentDate = new Date();
const timestamp = currentDate.toUTCString();
const filename = 'time.txt';
const filePath = path.join(folderPath, filename);

fs.ensureDir(folderPath)
  .then(() => fs.appendFile(filePath, timestamp, 'utf8'))
  .then(() => console.log(`Timestamp data added to ${filename} successfully.`))
  .catch((err) => console.error('Error adding timestamp data:', err));
