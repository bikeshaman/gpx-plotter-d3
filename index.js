const fs = require('fs');
const path = require('path');
const parser = require('fast-xml-parser');
const express = require('express');

const file = fs.readFileSync(path.join(__dirname, 'Long_s_Chasm_Lake.gpx'));

const json = parser.parse(file.toString(), {
  attributeNamePrefix: '',
  ignoreAttributes: false,
});

const { gpx: { trk: { trkseg: { trkpt: data } } } } = json;

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(PORT);
