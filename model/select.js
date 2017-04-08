const select = require('../db/select');

module.exports = {
  get: (obj) => {
    return select.selectData();
  }
};
