const fs = require('fs');
const temperature = require('../model/insert');
const selectData = require('../model/select');
const graph = require('../model/graph');

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
  data: {
    get: (req, res) => (selectData.get())
    .then((result) => {
    console.log("Got "+ result.length +" records");
    var html = "<!doctype html><html><body>";
    html += "<H1> Sensor Data for Last 24 Hours</H1>";
    html += "<table border=1 cellpadding=3 cellspacing=0>";
    html += "<tr><td>Seq#<td>Time Stamp<td>Temperature";
    for (var i=0; i< result.length; i++) {
      console.log(result[i].id);
       html += `<tr><td>Seq${i}<td>${result[result.length-1-i].time}<td>${result[result.length-1-i].value}`;
    }
    html += "</table>";
    html += "</body></html>";
    res.send(html);
    })
  },
  graph: {
    get: (req, res) => (graph.get())
    .then((result) => {
      console.log('got app.get(graph)');
      fs.readFile('graph.html', (err, html) => {
        console.log('html', html);
        html = " " + html;
        console.log('read file');
        var data = "";
        var comma = "";
        for (var i = 0; i < result.length; i += 1) {
          data += `${comma}['${result[i].time}', ${result[i].value}]`;
          comma = ',';
        }
        console.log(html);
        var header = "'time', 'temperature'";
        html = html.replace("<HEADER>", header);
        html = html.replace("<DATA>", data);
        res.writeHeader(200, {"Content-Type": "text/html"});
        console.log(html);
        res.write(html);
        res.end();
      });

    })
  },
}
