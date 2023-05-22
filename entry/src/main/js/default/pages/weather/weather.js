const fs = require('fs');

let rawdata = fs.readFileSync('credentials.json');
let config = JSON.parse(rawdata);

let KEY = config.KEY;
let ID = config.ID;

const UNIT = 'metric';

fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${KEY}&id=${
          ID}&units=${UNIT}`)
    .then(response => response.json())
    .then(data => {
      // Do something with the data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
