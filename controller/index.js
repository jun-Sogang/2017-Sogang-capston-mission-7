const fs = require('fs');
const temperature = require('../model/insert');

module.exports = {
  temperature: {
    get: (req,res) => {
      const inputObject = {};
      const today = new Date();
      inputObject.today = today;
      inputObject.temperature = req.query.temperature;
  //    console.log(req.query);
      const inputString = JSON.stringify(inputObject) +`\n`;
      fs.appendFile("Log.txt", inputString, (err) => {
        if (err) {
          throw err;
        }
      });
      temperature.get(inputObject);
      console.log(inputString);
    },
  },
}
