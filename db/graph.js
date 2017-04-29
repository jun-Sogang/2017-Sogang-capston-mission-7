const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  port : 3307,
  password : 'dkswm1',
  database : 'test',
  multipleStatements: true,
});
module.exprots = {
  graph : () => {
    const query = 'select * from sensors ';
    return new Promise((resolve, reject) => {
      connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('graphing query ok');
        return resolve(res);
	});
	});
  },
}
