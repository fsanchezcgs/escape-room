const submit = document.getElementById("btn-submit");

submit.addEventListener("click",(e) => {
  e.preventDefault();
  let name = document.getElementById("userName").value;
  let email = document.getElementById("userEmail").value;
  let pwd = document.getElementById("userPwd").value;
  let user = {
    name:name,
    email:email,
    pwd:pwd,
    games:{
      game1:{},
      game2:{}
    }
  };
  localStorage.setItem(email, JSON.stringify(user));
});