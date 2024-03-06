// Comprova si la recuperacio a trovat un usuari
if (loggedUser != null) {
  const submit = document.getElementById("btn-submit");

  let userName = document.getElementById("userName");
  let email = document.getElementById("userEmail");
  let pwd = document.getElementById("userPwd");
  
  // pre rellena el formulari amb l'informacio de l'usuari
  userName.value = loggedUser.name;
  email.value = loggedUser.email;
  pwd.value = loggedUser.pwd;

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // recoeix totes les dades del formulari
    let user = {
      name: userName.value,
      email: email.value,
      pwd: pwd.value,
      games: loggedUser.games,
    };
    // guarda l'informacio
    localStorage.setItem(email.value, JSON.stringify(user));
  });
} else {
  window.location.assign("./../index.html");
}
