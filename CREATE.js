const mysql = require('mysql');
/*Conexión a la base de datos*/
const mydb = mysql.createConnection({
  host: "localhost:3306",
  user: "root@localhost",
  password: null,
  database: "odontologia"
});

/*Conectar a la base de datos*/
mydb.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos exitosa con ID ' + mydb.threadId);
});

/*Crear un nuevo paciente*/
function crear_paciente(nombre, apellido, fecha_nacimiento, telefono, direccion, correo_electronico) {
  const sql = "INSERT INTO pacientes (nombre, apellido, fecha_nacimiento, telefono, direccion, correo_electronico) VALUES (?, ?, ?, ?, ?, ?)";
  const valores = [nombre, apellido, fecha_nacimiento, telefono, direccion, correo_electronico];

  mydb.query(sql, valores, (err, result) => {
    if (err) {
      console.error('Error al crear el paciente: ' + err.stack);
      return;
    }
    console.log("Paciente creado con ID: " + result.insertId);
  });
}

/*Ejemplo de creación de un paciente*/
crear_paciente("Juan", "Pérez", "1990-05-23", "555-1234", "Av. Principal 123", "juanperez@email.com");
