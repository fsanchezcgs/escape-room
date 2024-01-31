const submit = document.getElementById("btn-submit");

submit.addEventListener("click",(e) => {
  e.preventDefault();
  let email = document.getElementById("userEmail").value;
  let pwd = document.getElementById("userPwd").value;
  let user = JSON.parse(localStorage.getItem(email));
  console.log(user.pwd);
  console.log(pwd);
  if(user != null){
    if(user.pwd == pwd) {
      sessionStorage.setItem("userLogged", JSON.stringify(user));
    } else {
      console.log("not the same pwd");
    }
  } else {
    console.log("null");
  }
});