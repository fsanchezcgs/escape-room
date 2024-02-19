let loggedUser = JSON.parse(sessionStorage.getItem("userLogged"));
if (loggedUser != null) {
  let userName = document.getElementById("user_name");
  userName.innerHTML = `<a href="./../html/settings.html">${loggedUser.name}</a>`;
  let register = document.getElementById("register");
  register.style.display = "none";
  let login = document.getElementById("login");
  login.style.display = "none";
  let logout = document.getElementById("logout");
  logout.style.display = "block";
}

function logout () {
  sessionStorage.clear();
  location.reload();
}