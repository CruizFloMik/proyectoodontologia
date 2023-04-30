/*Leer información de un paciente*/
function leer_paciente(id_paciente) {
  const sql = "SELECT * FROM pacientes WHERE id_paciente = ?";
  const valor = [id_paciente];

  mydb.query(sql, valor, (err, result) => {
    if (err) {
      console.error('Error al leer el paciente: ' + err.stack);
      return;
    }

    const paciente = result[0];

    if (paciente) {
      console.log(paciente);
    } else {
      console.log("No se encontró el paciente con ID: " + id_paciente);
    }
  });
}

/*Ejemplo de lectura de un paciente*/ 
leer_paciente(1);

