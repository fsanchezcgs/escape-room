// Recupera l'usuari guardat al session storage
let loggedUser = JSON.parse(sessionStorage.getItem("userLogged"));
// Comprova si la recuperacio a trovat un usuari
if (loggedUser != null) {
  // Si trova l'usuari mostra el seu nom al futer, amaga el botot de registre i login, i mostra el botot de logout
  let userName = document.getElementById("user_name");
  userName.innerHTML = `<a href="./../html/settings.html">${loggedUser.name}</a>`;
  let register = document.getElementById("register");
  register.style.display = "none";
  let login = document.getElementById("login");
  login.style.display = "none";
  let logout = document.getElementById("logout");
  logout.style.display = "block";
}

// funcio que s'encarrega de fer logout al usuari
function logout () {
  sessionStorage.clear();
  location.reload();
}