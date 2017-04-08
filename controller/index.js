const fs = require('fs');
module.exports = {
  temperature: {
    get: (req,res) => {
      const inputObject = {};
      const today = new Date();
      inputObject.today = today;
      inputObject.time =`${today.getMonth()+1}.${today.getDate()}.${today.getHours()}.${today.getMinutes()}.${today.getSeconds()}`
      const inputString = JSON.stringify(inputObject) +`\n`;
      fs.appendFile("Log.txt", inputString, (err) => {
        if (err) {
          throw err;
        }
      });
      console.log(inputString);
    },
  },
}
