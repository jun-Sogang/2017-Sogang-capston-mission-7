const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  port : 3306,
  password : 'dkswm1',
  database : 'data',
  multipleStatements: true,
});
module.exports = {
  selectData: () => {
    const selectQuery = `
    select * from sensors where time > date_sub(now(), INTERVAL 1 DAY)
    `;
    return new Promise((resolve, reject) => {
      connection.query(selectQuery, (err, res) => {
          if (err) throw reject(err);
          console.log('select OK!!');
          return resolve(res);
        });
    });
  }
}
