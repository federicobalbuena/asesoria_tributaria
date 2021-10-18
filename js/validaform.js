window.onload = iniciar;

function iniciar() {
  document.getElementById('enviar').addEventListener('click', validate, false);
}

function validarNombre() {
  var elemento = document.getElementById('nombre');
  if (elemento.value ==''){
    alert('El campo Nombre no puede estar vacío');
    return false
  }
  return true;
}

function validarTel() {
    var elemento = document.getElementById('tel');
      if (isNaN(elemento.value)){
        alert('Formato incorrecto, en el campo Teléfono debe ingresar números');
        return false
      }
      return true;
    }
    
    function validarCheck() {
    var elemento = document.getElementById('aceptar');
    if (!elemento.checked){
      alert('Es necesario aceptar los términos y condiciones'); // Falta la página de términos y condiciones
      return false;
    }
    return true;
    }
    
    function validate(e){
      if(validarNombre() && validarTel() && validarCheck() && confirm('¿¿¿El proyecto está como para aprobar???')){ //Acá en la pregunta va un ¿Está seguro que desea suscribirse?
        return true;
      } else {
        e.preventDefault();
        return false;
      }
    }
