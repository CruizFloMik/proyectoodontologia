const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root@localhost',
  password: null,
  database: 'odontologia'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

app.get('/agendar_cita', function(req, res) {
  connection.query('SELECT * FROM agendar_cita', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3306, function() {
  console.log('API escuchando en el puerto 3306');
});
