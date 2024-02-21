if (loggedUser != null) {
  const submit = document.getElementById("btn-submit");

  let userName = document.getElementById("userName");
  let email = document.getElementById("userEmail");
  let pwd = document.getElementById("userPwd");

  userName.value = loggedUser.name;
  email.value = loggedUser.email;
  pwd.value = loggedUser.pwd;

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let user = {
      name: userName.value,
      email: email.value,
      pwd: pwd.value,
      games: loggedUser.games,
    };
    localStorage.setItem(email.value, JSON.stringify(user));
  });
} else {
  window.location.assign("./../index.html");
}
