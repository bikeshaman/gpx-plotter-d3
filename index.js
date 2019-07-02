const fs = require('fs');
const path = require('path');
const parser = require('fast-xml-parser');

const file = fs.readFileSync(path.join(__dirname, 'Long_s_Chasm_Lake.gpx'));

const json = parser.parse(file.toString(), {
  attributeNamePrefix: '',
  ignoreAttributes: false,
});
