const graph = require('../db/graph');

module.exports = {
  get: (obj) => {
    return graph.graph();
  }
};
