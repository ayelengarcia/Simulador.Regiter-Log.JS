// variables globales
let nombre;
let userNew;
let passNew;

// FUNCIONES
// con parámetro
function normalizar(username) {
  let letraInicial = username.substring(0, 1);
  let resto = username.substring(1, username.length);
  return letraInicial.toUpperCase() + resto.toLowerCase();
}

//Normal
function register() {
  nombre = prompt("¿Como te llamas?");
  userNew = prompt("Ingresá un nombre de usuario.");
  passNew = prompt("Ingresá una contraseña");
  if (
    userNew.trim() !== "" &&
    userNew.trim().length >= 4 &&
    passNew.trim() !== "" &&
    passNew.trim().length >= 4
  ) {
    alert(
      "El usuario " + normalizar(userNew) + " se ha registrado correctamente."
    );
    return nombre, userNew, passNew;
  } else {
    alert(
      "Ha ocurrido un error, el usuario y la contraseña deben tener al menos 4 dígitos."
    );
  }
}

//Ciclo FOR
function preguntas() {
  alert(normalizar(nombre) + " ahora necesitamos que ingreses algunos datos!");
  let eleccion = confirm("¿Deseas continuar?");
  const EDAD = [
    "menos de 18 años",
    "entre 18 y 25 años",
    "entre 25 y 35 años",
    "entre 35 y 45 años",
    "más de 45 años",
  ];

  if (eleccion === true) {
    for (let i = 0; i < 5; i++) {
      let edad = confirm(normalizar(nombre) + " ¿Tenés " + EDAD[i] + "?");
      if (edad === true) {
        alert(
          normalizar(nombre) + ", tenés " + EDAD[i] + ". Ya lo registramos!"
        );
        break;
      } else if (edad === true) {
        alert(
          normalizar(nombre) + ", tenés " + EDAD[i] + ". Ya lo registramos!"
        );
        break;
      } else if (edad === true) {
        alert(
          normalizar(nombre) + ", tenés " + EDAD[i] + ". Ya lo registramos!"
        );
        break;
      } else if (edad === true) {
        alert(
          normalizar(nombre) + ", tenés " + EDAD[i] + ". Ya lo registramos!"
        );
        break;
      } else if (edad === true) {
        alert(
          normalizar(nombre) + ", tenés " + EDAD[i] + ". Ya lo registramos!"
        );
        break;
      }
    }
  } else {
    alert("No hay problema! Puedes rellenarlo más tarde!");
  }
}

//Normal
function login() {
  let userLog = prompt("Ingresá tu usuario");
  let passLog = prompt("Ingresá tu contraseña");
  if (userLog === userNew && passLog === passNew) {
    alert("Bienvenid@ " + normalizar(nombre) + "!");
  } else {
    alert("El usuario " + userLog + " no está registrado.");
  }
}
