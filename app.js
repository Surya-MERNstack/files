const fs = require('fs');
const path = require('path');

const folderPath = 'files';
const currentDate = new Date();
const timestamp = currentDate.toUTCString();
const filename = 'time.txt';
const filePath = path.join(folderPath, filename);

try {
  fs.mkdirSync(folderPath, { recursive: true });
  fs.writeFileSync(filePath, timestamp, 'utf8');
  console.log(`Timestamp data added to ${timestamp} successfully.`);
  // Additional code or operations can be added here
} catch (err) {
  console.error('Error adding timestamp data:', err);
}
