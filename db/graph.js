const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  port : 3306,
  password : 'dkswm1',
  database : 'data',
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
