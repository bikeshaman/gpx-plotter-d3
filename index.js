const fs = require('fs');
const path = require('path');
const parser = require('fast-xml-parser');
const express = require('express');

const gpxToJSON = (gpxFile) => {
  const gpx = parser.parse(gpxFile.toString(), {
    ignoreAttributes: false,
    attributeNamePrefix: '',
    attrValueProcessor: Number,
  });
  const json = gpx.gpx.trk.trkseg.trkpt;
  return json;
};

// on initial server load, the data from this particular run is prepared
// readFileSync is appropriate because this operation will happen very, very likely before any
// requests will reach the server
const gpxFile = fs.readFileSync(path.join(__dirname, 'Long_s_Chasm_Lake.gpx'));
const json = gpxToJSON(gpxFile);

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static('public'));

app.get('/data', (req, res) => {
  res.json(json);
});

app.post('/data', (req, res) => {
  let newGPX = '';
  req.on('data', (part) => {
    newGPX = `${newGPX}${part.toString()}`;
  }).on('end', () => {
    res.json(gpxToJSON(newGPX));
  });
});

app.listen(PORT);
