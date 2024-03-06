// Recupera l'usuari guardat al session storage
let loggedUser = JSON.parse(sessionStorage.getItem("userLogged"));

// Comprova si la recuperacio a trovat un usuari
if (loggedUser != null) {
  // Si trova l'usuari comprova si l'estat de la partida
  if (loggedUser.games.game1 == null) {
    game1();
  } else if (loggedUser.games.game1 == 2) {
    game2();
  }

  // funcio que commença el primer joc
  function game1() {
    let codeClick = document.getElementById("codeClick");
    let game = document.getElementById("game");

    // Es on es guardan el primer i segon nombre
    let number1 = 0;
    let number2 = 0;

    // nombre de pareas trobades
    let score = 0;

    let firstCard;
    // nombre de interruptors
    let numberDivs = 16;
    // On es guarden els nombres dels interruptors
    let numbers = [];

    // genera els nombres dins l'array
    for (let i = 0; i < 2; i++) {
      for (let ii = 0; ii < numberDivs / 2; ii++) {
        numbers.push(ii + 1);
      }
    }

    // descoloca els nombres dels arrays
    numbers = numbers.sort(() => {
      return Math.random() - 0.5;
    });

    // creacio de l'estructura dels interruptos
    let structure = ``;
    for (let i = 0; i < numberDivs; i++) {
      structure += `<div class="card"><p class="m-0">${numbers[i]}</p></div>`;
    }

    // quan es pitja s'indicador apareix sa capsa dels interruptors
    codeClick.addEventListener("click", () => {
      game.style.display = "flex";

      game.innerHTML = structure;

      game.addEventListener("click", (e) => {
        // comprova que el que sa pitjat es un interruptor
        if (!e.target.classList.contains("checked") && e.target.id != "game") {
          // afejeix una clase per evitar que el usuari seleccioni el mateix interrruptor
          e.target.classList.add("checked");
          let p = e.target.innerText;
          // comprova si es el primer nombre
          if (number1 == 0) {
            number1 = p;
            // guarda el primer interruptor dins una variable
            firstCard = e.target;
            // comprova si es el segon nombre
          } else if (number2 == 0) {
            number2 = p;
            // dona uns moments antes de amaga els nombres
            setTimeout(function () {
              // si la parella de nombres es igual se suma un a la puntuacio
              if (number1 == number2) {
                score++;
                // si el nombre de pareas trobades es la mitat de interruptors guanyas i pases al seguent joc
                if (score == numberDivs / 2) {
                  game2();
                }
              } else {
                // sino son iguals se amagen els nombres
                e.target.classList.remove("checked");
                firstCard.classList.remove("checked");
              }
              // es fan net els nombres
              number1 = 0;
              number2 = 0;
            }, 500);
          }
        }
      });
    });
  }

  // ----------------------------------------------------

  // funcio que commença el segon joc
  function game2() {
    // es guarda el progres del usuari
    loggedUser.games.game1 = 2;
    sessionStorage.setItem("userLogged", JSON.stringify(loggedUser));
    localStorage.setItem(loggedUser.email, JSON.stringify(loggedUser));

    let body = document.getElementsByTagName("body");
    let main = document.getElementsByTagName("main");

    // es genera un nombre aleatori per el minijoc
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

    // escrea l'estructura html per el segon joc
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
    // s'actualiza l'estructura html
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
        // comprova que el element pitjat es un nombre
        if (e.target.classList.contains("number")) {
          // comprova que el element pitjat es el boto de elimina
          if (e.target.classList.contains("delete")) {
            // si ho es elimina un nombre
            deleteNum = screenCode.split("");
            deleteNum.splice(deleteNum.length - 1, 1);
            screenCode = deleteNum.join("");
            let screen = document.getElementById("codeScreen");
            screen.innerText = screenCode;
            // comprova que el element pitjat es el boto de confirmar
          } else if (e.target.classList.contains("confirm")) {
            // si el codi es correcte marca sa partida com finalitzada y envia l'usuari a sa pantalla de victoria
            if (screenCode === code) {
              loggedUser.games.game1 = 3;
              sessionStorage.setItem("userLogged", JSON.stringify(loggedUser));
              localStorage.setItem(
                loggedUser.email,
                JSON.stringify(loggedUser)
              );
              window.location.assign("./../win.html");
            }
            // si ja hi ha menus de 4 nombres introduits deixara posar mes nombres, sino no
          } else if (screenCode.length < 4) {
            screenCode = screenCode + e.target.innerHTML;
            let screen = document.getElementById("codeScreen");
            screen.innerText = screenCode;
          }
        }
      });

      // permetix tanca el pop up
      let closePop = document.getElementsByClassName("closePopup");
      closePop[0].addEventListener("click", () => {
        popup[0].style.display = "none";
      });
    });
  }
  // si no sa trobat un usuari loggedjat se renvia al home
} else {
  window.location.assign("./../../index.html");
}
