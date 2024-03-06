const submit = document.getElementById("btn-submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  // recoeix totes les dades del formulari
  let email = document.getElementById("userEmail");
  let pwd = document.getElementById("userPwd");
  let user = JSON.parse(localStorage.getItem(email.value));
  // cridada de les funcions que comprovan el format de les dades
  if (isRequired([email, pwd]) && isEmailValid(email)) {
    // comprova si sa trobat usuari
    if (user != null) {
      // comprova si la contrasenya es correcta
      if (user.pwd == pwd.value) {
        // inicia sesio al usuari, i redirigeix l'usuari a la pagina home
        sessionStorage.setItem("userLogged", JSON.stringify(user));
        window.location.assign("./../index.html");
      // mensatge de la contrasenya no es correcta
      } else {
        showIncorrect(pwd, ` la contrasenya és incorrecte`);
      }
      // mensatge de l'usuari no sa trobat
    } else {
      showIncorrect(email, ` l'usuari no existeix`);
    }
  } else {
    console.log("object");
  }
});

// funcions de comprovacio de format
function isRequired(inputArray) {
  let cont = 0;

  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showIncorrect(input, ` es necessari`);
    } else {
      showCorrect(input);
      cont++;
    }
  });

  if (cont == 2) {
    return true;
  } else {
    return false;
  }
}

function isEmailValid(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showCorrect(input);
    return true;
  } else {
    let missatge = ` no té el format correcte`;
    showIncorrect(input, missatge);
    return false;
  }
}

function showIncorrect(input, missatge) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const label = formControl.querySelector("label");
  const small = formControl.querySelector("small");
  small.innerText = label.innerText + " " + missatge;
}

function showCorrect(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control correct";
}
