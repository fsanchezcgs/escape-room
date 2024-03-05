let loggedUser = JSON.parse(sessionStorage.getItem("userLogged"));

if (loggedUser != null) {
  let secondGame = false;
  if (loggedUser.games.game1 == null) {
    game1();
  } else if (loggedUser.games.game1 == 2) {
    game2();
  }

  function game1() {
    let codeClick = document.getElementById("codeClick");
    let game = document.getElementById("game");

    let number1 = 0;
    let number2 = 0;
    let score = 0;
    let firstCard;
    let numberDivs = 16;
    let numbers = [];

    for (let i = 0; i < 2; i++) {
      for (let ii = 0; ii < numberDivs / 2; ii++) {
        numbers.push(ii + 1);
      }
    }

    numbers = numbers.sort(() => {
      return Math.random() - 0.5;
    });

    let structure = ``;
    for (let i = 0; i < numberDivs; i++) {
      structure += `<div class="card"><p class="m-0">${numbers[i]}</p></div>`;
    }

    codeClick.addEventListener("click", () => {
      game.style.display = "flex";

      game.innerHTML = structure;

      game.addEventListener("click", (e) => {
        if (!e.target.classList.contains("checked") && e.target.id != "game") {
          e.target.classList.add("checked");
          let p = e.target.innerText;
          if (number1 == 0) {
            number1 = p;
            firstCard = e.target;
          } else if (number2 == 0) {
            number2 = p;
            setTimeout(function () {
              if (number1 == number2) {
                score++;
                if (score == numberDivs / 2) {
                  game2();
                }
              } else {
                e.target.classList.remove("checked");
                firstCard.classList.remove("checked");
              }
              number1 = 0;
              number2 = 0;
            }, 500);
          }
        }
      });
    });
  }

  // ----------------------------------------------------

  function game2() {
    loggedUser.games.game1 = 2;
    sessionStorage.setItem("userLogged", JSON.stringify(loggedUser));
    localStorage.setItem(loggedUser.email, JSON.stringify(loggedUser));

    let body = document.getElementsByTagName("body");
    let main = document.getElementsByTagName("main");

    let code = Math.floor(Math.random() * (9999 - 1) + 1);
    let screenCode = "";
    if (code < 10) {
      code = "000" + code;
    } else if (code < 100) {
      code = "00" + code;
    } else if (code < 1000) {
      code = "0" + code;
    }

    code = code.toString();
    console.log(code);

    let structure = `<button id="codeClick"></button>
    <div class="divPopup">
    <div class="popup">
    <div class="closePopup">x</div>
    <div id="codeScreen"></div>
    <div id="numbers">
    <div class="number">7</div>
    <div class="number">8</div>
    <div class="number">9</div>
    <div class="number">4</div>
    <div class="number">5</div>
    <div class="number">6</div>
    <div class="number">1</div>
    <div class="number">2</div>
    <div class="number">3</div>
    <div class="number confirm"></div>
    <div class="number">0</div>
    <div class="number delete"></div>
    </div>
    </div>
    <div class="note">
    <div class="rounded">
    <h3>RECORDATORI</h3>
    <p>Ha d'enviar a ${
      code[0]
    } empleats a què vagin a recollir un encàrrec de ${
      code[1]
    } taules, canvia l'encàrrec de ${
      parseInt(code[2]) + 2
    } cadires perquè en sobren 2, tot això abans del dia ${
      code[3]
    } del següent mes.</p>
    </div>
    </div>
    </div>`;
    main[0].innerHTML = structure;

    body[0].classList.remove("fistStage");
    body[0].classList.add("secondStage");

    let popup = document.getElementsByClassName("divPopup");
    let codeClick = document.getElementById("codeClick");

    codeClick.style.left = "1040px";
    codeClick.style.top = "650px";
    codeClick.style.width = "30px";
    codeClick.style.height = "40px";

    codeClick.addEventListener("click", () => {
      popup[0].style.display = "block";

      let numbers = document.getElementById("numbers");
      numbers.addEventListener("click", (e) => {
        if (e.target.classList.contains("number")) {
          if (e.target.classList.contains("delete")) {
            deleteNum = screenCode.split("");
            deleteNum.splice(deleteNum.length - 1, 1);
            screenCode = deleteNum.join("");
            let screen = document.getElementById("codeScreen");
            screen.innerText = screenCode;
          } else if (e.target.classList.contains("confirm")) {
            if (screenCode === code) {
              loggedUser.games.game1 = 3;
              sessionStorage.setItem("userLogged", JSON.stringify(loggedUser));
              localStorage.setItem(
                loggedUser.email,
                JSON.stringify(loggedUser)
              );
              window.location.assign("./../win.html");
            }
          } else if (screenCode.length < 4) {
            screenCode = screenCode + e.target.innerHTML;
            let screen = document.getElementById("codeScreen");
            screen.innerText = screenCode;
          }
        }
      });

      let closePop = document.getElementsByClassName("closePopup");
      closePop[0].addEventListener("click", () => {
        popup[0].style.display = "none";
      });
    });
  }

  function save() {
    if (secondGame == true) {
    }
  }
} else {
  window.location.assign("./../../index.html");
}
