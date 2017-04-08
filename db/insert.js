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
