const submit = document.getElementById("btn-submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("userName");
  let email = document.getElementById("userEmail");
  let pwd = document.getElementById("userPwd");
  let pwd2 = document.getElementById("userPwd2");
  let user = {
    name: name.value,
    email: email.value,
    pwd: pwd.value,
    games: {
      game1: {},
      game2: {},
    },
  };
  if (
    isRequired([name, email, pwd, pwd2]) &&
    isEmailValid(email) &&
    checkLength(pwd, 8, 25) &&
    checkPassword(pwd, pwd2)
  ) {
    localStorage.setItem(email, JSON.stringify(user));
    sessionStorage.setItem("userLogged", JSON.stringify(user));
    window.location.assign("./../index.html");
  }
});

function isRequired(inputArray) {
  let cont = 0;

  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showIncorrect(input, ` is required`);
    } else {
      showCorrect(input);
      cont++;
    }
  });

  if (cont == 4) {
    return true;
  } else {
    return false;
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showIncorrect(input, "Ha de tener un minim de " + min + " caracters");
    return false;
  } else if (input.value.length > max) {
    showIncorrect(input, "Ha de tener un minim de " + max + " caracters");
    return false;
  } else {
    showCorrect(input);
    return true;
  }
}

function isEmailValid(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showCorrect(input);
    return true;
  } else {
    let missatge = ` is not in the correct format`;
    showIncorrect(input, missatge);
    return false;
  }
}

function checkPassword(input1, input2) {
  if (input1.value != input2.value) {
    let missatge = ` must be equal to Password`;
    showIncorrect(input2, missatge);
    return false;
  } else {
    return true;
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
