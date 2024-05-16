// JavaScript para validar el formulario
const formulario = document.getElementById('formulario'); // Selecciona el formulario por su ID
const inputs = document.querySelectorAll('#formulario input'); // Selecciona todos los inputs dentro del formulario
const mensajeError = document.getElementById('mensaje_error'); // Selecciona el mensaje de error
const mensajeExito = document.getElementById('mensaje_exito'); // Selecciona el mensaje de éxito

// Expresiones regulares para validar campos
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, números, guion y guion_bajo, longitud entre 4 y 16
  nombre: /^[a-zA-Z\s]+$/, // Letras y espacios, pueden llevar acentos
  password: /^.{8,12}$/, // 8 a 12 caracteres
  direccion: /^[a-zA-Z0-9\s]+$/, // Letras, espacios y números
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Formato de correo electrónico
  telefono: /^\d{10}$/, // 10 dígitos numéricos
  pais: /^[a-zA-Z\s]+$/ // Letras y espacios, pueden llevar acentos
};

// Objeto para almacenar el estado de los campos
const campos = {
  usuario: false,
  nombre: false,
  password: false,
  direccion: false,
  correo: false,
  telefono: false,
  pais: false
};

// Función para validar el formulario en tiempo real
const validarFormulario = (e) => {
  switch (e.target.name) { // Verifica el nombre del input que provocó el evento
    case "usuario":
      validarCampo(expresiones.usuario, e.target, 'usuario'); // Valida el campo de usuario
      break;
    case "nombre":
      validarCampo(expresiones.nombre, e.target, 'nombre'); // Valida el campo de nombre
      break;
    case "password":
      validarCampo(expresiones.password, e.target, 'password'); // Valida el campo de contraseña
      break;
    case "password2":
      validarPassword2(); // Valida la confirmación de contraseña
      break;
    case "direccion":
      validarCampo(expresiones.direccion, e.target, 'direccion'); // Valida el campo de dirección
      break;
    case "correo":
      validarCampo(expresiones.correo, e.target, 'correo'); // Valida el campo de correo electrónico
      break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, 'telefono'); // Valida el campo de teléfono
      break;
    case "pais":
      validarCampo(expresiones.pais, e.target, 'pais'); // Valida el campo de país
      break;
  }
};

// Función para validar campos individuales
const validarCampo = (expresion, input, campo) => {
  if (input.value.trim() === '') { // Si el campo está vacío
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto'); // Agrega clase de estilo para indicar error
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto'); // Remueve clase de estilo para indicar campo correcto
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle'); // Agrega icono de error
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle'); // Remueve icono de check
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo'); // Muestra mensaje de error
    campos[campo] = false; // Marca el campo como inválido en el objeto campos
  } else if (expresion.test(input.value)) { // Si la expresión regular pasa la validación
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto'); // Remueve clase de estilo para indicar error
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto'); // Agrega clase de estilo para indicar campo correcto
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle'); // Agrega icono de check
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle'); // Remueve icono de error
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo'); // Oculta mensaje de error
    campos[campo] = true; // Marca el campo como válido en el objeto campos
  } else { // Si la expresión regular no pasa la validación
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto'); // Agrega clase de estilo para indicar error
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto'); // Remueve clase de estilo para indicar campo correcto
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle'); // Agrega icono de error
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle'); // Remueve icono de check
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo'); // Muestra mensaje de error
    campos[campo] = false; // Marca el campo como inválido en el objeto campos
  }
};

// Función para validar la confirmación de contraseña
const validarPassword2 = () => {
  const inputPassword1 = document.getElementById('password'); // Selecciona el primer campo de contraseña
  const inputPassword2 = document.getElementById('password2'); // Selecciona el segundo campo de contraseña

  if(inputPassword1.value !== inputPassword2.value) { // Si las contraseñas no coinciden
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto'); // Agrega clase de estilo para indicar error
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto'); // Remueve clase de estilo para indicar campo correcto
    document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle'); // Agrega icono de error
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle'); // Remueve icono de check
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo'); // Muestra mensaje de error
    campos['password'] = false; // Marca el campo de contraseña como inválido en el objeto campos
  } else { // Si las contraseñas coinciden
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto'); // Remueve clase de estilo para indicar error
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto'); // Agrega clase de estilo para indicar campo correcto
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle'); // Remueve icono de error
    document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle'); // Agrega icono de check
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo'); // Oculta mensaje de error
    campos['password'] = true; // Marca el campo de contraseña como válido en el objeto campos
  }
};

// Validar formulario en tiempo real
inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario); // Ejecuta la función validarFormulario al soltar una tecla
  input.addEventListener('blur', validarFormulario); // Ejecuta la función validarFormulario al salir del input
});

// Validar envío del formulario
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita el envío del formulario

  // Verificar si todos los campos están completos y válidos
  const camposValidos = Object.values(campos).every((campo) => campo);

  if(camposValidos) { // Si todos los campos son válidos
    formulario.reset(); // Limpiar formulario

    // Mostrar mensaje de éxito
    mensajeExito.classList.add('formulario__mensaje-exito-activo');
    setTimeout(() => {
      mensajeExito.classList.remove('formulario__mensaje-exito-activo');
    }, 5000); // Ocultar mensaje después de 5 segundos

    // Limpiar estilos de campos correctos
    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
      icono.classList.remove('formulario__grupo-correcto');
    });

    // Ocultar mensaje de error si está activo
    mensajeError.classList.remove('formulario__mensaje-activo');
  } else { // Si algún campo es inválido
    // Mostrar mensaje de error
    mensajeError.classList.add('formulario__mensaje-activo');
  }
});
