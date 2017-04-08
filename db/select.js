const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'test',
  port : 3307,
  password : 'dkswm1',
  database : 'test',
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
