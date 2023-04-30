/*Eliminar un paciente*/
function eliminar_paciente(id_paciente) {
    const sql = "DELETE FROM pacientes WHERE id_paciente = ?";
    const valor = [id_paciente];
  
    mydb.query(sql, valor, (err, result) => {
      if (err) {
        console.error('Error al eliminar el paciente: ' + err.stack);
        return;
      }
  
      console.log("Se eliminó el paciente con ID: " + id_paciente);
    });
  }
  
  /*Ejemplo de eliminación de un paciente*/
  eliminar_paciente(1);
  