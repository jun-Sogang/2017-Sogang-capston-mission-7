const insert = require('../db/insert');

module.exports = {
  get: (obj) => {
    return insert.insertTemperature(obj.temperature);
  }
};
