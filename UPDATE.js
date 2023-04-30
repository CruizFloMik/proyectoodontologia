/*Actualizar la información de un paciente*/
function actualizar_paciente(id_paciente, nombre, apellido, fecha_nacimiento, telefono, direccion, correo_electronico) {
    const sql = "UPDATE pacientes SET nombre = ?, apellido = ?, fecha_nacimiento = ?, telefono = ?, direccion = ?, correo_electronico = ? WHERE id_paciente = ?";
    const valores = [nombre, apellido, fecha_nacimiento, telefono, direccion, correo_electronico, id_paciente];
  
    mydb.query(sql, valores, (err, result) => {
      if (err) {
        console.error('Error al actualizar el paciente: ' + err.stack);
        return;
      }
  
      console.log("Se actualizó la información del paciente con ID: " + id_paciente);
    });
  }
  
  /*Ejemplo de actualización de un paciente*/
  actualizar_paciente(1, "Juan Carlos", "Pérez Gómez", "1990-05-23", "555-1234", "Av. Principal 123", "juanperez@gmail.com");
  