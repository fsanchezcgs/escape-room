let code = Math.floor(Math.random() * (9999 - 1) + 1);
let screen = "";
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
  if (screen.length <4) {
    if (e.target.classList.contains("number")) {
      screen = e.target.innerHTML + screen;
      console.log(screen);
      console.log(screen.length);
    }
  }
});
