const fs = require('fs-extra');
const path = require('path');

const folderPath = 'files';
const currentDate = new Date();
const options = { day: 'numeric', month: 'long', year: 'numeric' };
const timestamp = currentDate.toLocaleDateString('en-US', options);
const filename = 'time.txt';
const filePath = path.join(folderPath, filename);

fs.ensureDir(folderPath)
  .then(() => fs.appendFile(filePath, timestamp, 'utf8'))
  .then(() => console.log(`Timestamp data added to ${timestamp} successfully.`))
  .catch((err) => console.error('Error adding timestamp data:', err));
