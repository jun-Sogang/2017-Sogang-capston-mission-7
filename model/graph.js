const graph = require('../db/graph');

module.exports = {
  get: (obj) => {
    console.log(graph);
    return graph.showGraph();
  }
};
