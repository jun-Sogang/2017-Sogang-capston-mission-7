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
  insertTemperature: (temperature) => {
    const insertQuery = `
    INSERT INTO sensors
                (value)
    VALUES (${temperature});
    `;
    return connection.query(insertQuery, (err) => {
        if (err) throw err;
        console.log('Insert OK!!');
      });
  }
}
