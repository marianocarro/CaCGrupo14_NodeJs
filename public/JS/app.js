$('.carousel').carousel({
    interval: 2000
  })

  // JS PARA FORMULARIO
  //funcion para validad datos vacios del formulario contacto
  function validarFormulario() {
    var nombre = document.getElementById("nombreyapellido").value;
    var nombreError = document.getElementById("nombreError");
    if (nombre === "" || nombre === " ") {
      nombreError.style.display = "block";
      valido = false;
      } else {
      nombreError.style.display = "none";
    }

    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    if (email === "" || email === " ") {
      emailError.style.display = "block";
      valido = false;
      } else {
      emailError.style.display = "none";
    }

    var mensaje = document.getElementById("mensaje").value;
    var mensajeError = document.getElementById("mensajeError");
    if (mensaje === "" || mensaje === " ") {
      mensajeError.style.display = "block";
      valido = false;
      } else {
        mensajeError.style.display = "none";
    }

    if (!valido) {
      event.preventDefault(); // Evita que el formulario se envíe si hay errores
  }
  }

    
  
    