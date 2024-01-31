let loggedUser = JSON.parse(sessionStorage.getItem("userLogged"));
if (loggedUser != null) {
  let userName = document.getElementById("user_name");
  userName.innerHTML = `${loggedUser.name}`;
  let register = document.getElementById("register");
  register.style.display = "none";
  let login = document.getElementById("login");
  login.style.display = "none";
}
