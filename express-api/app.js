const express = require("express");
const cors = require('cors');
const app = express();
const mysql = require('mysql');

// mysql情報を入力し、接続
const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'balance_db'
});
db.connect(function(err) {
  if (err) throw err;
  console.log('Connected');
});

// すべてのAPIをCORS許可
app.use(cors());
app.use(express.json())

// server起動
const server = app.listen(3000, () => {
  console.log("It works!")
});

app.get('/api/boxs', (req, res) => {
  console.log('req: get /api/boxs');

  const sql = "SELECT s.* FROM `Cards` AS s INNER JOIN (SELECT CEIL(RAND() * (SELECT MAX(`id`) FROM `Cards`)) AS `id`) AS `tmp` ON s.id = tmp.id;"

	db.query(sql, function (err, result, fields) {  
    if (err) throw err;
    res.send(result)

    console.log(result);
    });
});

app.put('/api/boxs/like', (req, res) => {
  console.log('req: put /api/boxs/like');

  const sql = "UPDATE Cards SET Liked = Liked + ? WHERE ID = ?;"

	db.query(sql, [req.body.count, req.body.id], function (err, result, fields) {  
    if (err) throw err;
    res.send("like request has been succeed!");

    console.log(result);
    });
});
