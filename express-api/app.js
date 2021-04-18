const express = require("express");
const cors = require('cors');
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

app.use(cors());

const server = app.listen(3000, () => {
  console.log("It works!")
});

app.get('/api/boxs', (request, response) => {
  console.log('request: /api/boxs');

  const sql = "SELECT s.* FROM `Cards` AS s INNER JOIN (SELECT CEIL(RAND() * (SELECT MAX(`id`) FROM `Cards`)) AS `id`) AS `tmp` ON s.id = tmp.id;"

	con.query(sql, function (err, result, fields) {  
    if (err) throw err;
    response.send(result)

    console.log('response:' + JSON.stringify(result));
    });
});