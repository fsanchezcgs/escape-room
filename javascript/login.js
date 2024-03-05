const submit = document.getElementById("btn-submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("userEmail");
  let pwd = document.getElementById("userPwd");
  let user = JSON.parse(localStorage.getItem(email.value));
  if (isRequired([email, pwd]) && isEmailValid(email)) {
    if (user != null) {
      if (user.pwd == pwd.value) {
        sessionStorage.setItem("userLogged", JSON.stringify(user));
        window.location.assign("./../index.html");
      } else {
        showIncorrect(pwd, ` la contrasenya és incorrecte`);
      }
    } else {
      showIncorrect(email, ` l'usuari no existeix`);
    }
  } else {
    console.log("object");
  }
});

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
