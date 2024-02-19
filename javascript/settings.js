if (loggedUser != null) {
  const submit = document.getElementById("btn-submit");

  let userName = document.getElementById("userName");
  let email = document.getElementById("userEmail");
  let pwd = document.getElementById("userPwd");
  // let checkbox = document.getElementById("admin");

  userName.value = loggedUser.name;
  email.value = loggedUser.email;
  pwd.value = loggedUser.pwd;

  // if(loggedUser.admin == true) {
  //   checkbox.checked = true;
  // } else {
  //   checkbox.checked = false;
  // }

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let user = {
      name: userName.value,
      email: email.value,
      admin: false,
      pwd: pwd.value,
      games: loggedUser.games,
    };
    localStorage.setItem(email.value, JSON.stringify(user));
  });
} else {
  window.location.assign("./../index.html");
}
