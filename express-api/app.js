const express = require("express");
const app = express();

const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'balance_db'
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected');
});

const server = app.listen(3000, () => {
  console.log("It works!")
});

app.get('/api/boxs/1', (request, response) => {
  console.log('request: /api/boxs/1');

  const sql = "select * from Cards"
	con.query(sql, function (err, result, fields) {  
    if (err) throw err;
    response.send(result)

    console.log('response:' + result);
    });
});