let codeClick = document.getElementById("codeClick");

codeClick.addEventListener("click", () => {
  let popup = document.getElementsByClassName("divPopup");
  popup[0].style.display = "block";
  let code = Math.floor(Math.random() * (9999 - 1) + 1);
  let screenCode = "";
  if (code < 10) {
    code = "000" + code;
  } else if (code < 100) {
    code = "00" + code;
  } else if (code < 1000) {
    code = "0" + code;
  }
  console.log(code);

  let numbers = document.getElementById("numbers");
  numbers.addEventListener("click", (e) => {
    if (e.target.classList.contains("number")) {
      if (e.target.classList.contains("delete")) {
        
      }
      if (e.target.classList.contains("correct"))
        if (screenCode.length < 4) {
          screenCode = screenCode + e.target.innerHTML;
          let screen = document.getElementById("codeScreen");
          screen.innerText = screenCode;
          console.log(screenCode);
          console.log(screenCode.length);
        }
    }
  });

  let closePop = document.getElementsByClassName("closePopup");
  closePop[0].addEventListener("click", () => {
    popup[0].style.display = "none";
  });
});
