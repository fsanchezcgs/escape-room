let play = document.getElementById("play");

play.addEventListener("click", () => {
  if (loggedUser != null) {
    let main = document.getElementsByTagName("main");
    if (loggedUser.games.game1 == null || loggedUser.games.game1 == 3) {
      main[0].innerHTML = `
      <h1 class="mb-4">Eligue una Opcion</h1>
      <div>
      <button id="new" class="p-2 rounded-3 mx-3">
      <h2>NUEVA PARTIDA</h2>
      </button>
      </div>`;
      let newGame = document.getElementById("new");
      newGame.addEventListener("click", () => {
        loggedUser.games.game1 = null;
        sessionStorage.setItem("userLogged", JSON.stringify(loggedUser));
        localStorage.setItem(loggedUser.email, JSON.stringify(loggedUser));
        window.location.assign("./../html/games/firstEscapeRoom.html");
      });
    } else {
      main[0].innerHTML = `
      <h1 class="mb-4">Eligue una Opcion</h1>
      <div>
      <button id="new" class="p-2 rounded-3 mx-3">
      <h2>NUEVA PARTIDA</h2>
      </button>
      <button id="continue" class="p-2 rounded-3">
      <h2>CONTINUAR</h2>
      </button>
      </div>`;
      let newGame = document.getElementById("new");
      newGame.addEventListener("click", () => {
        loggedUser.games.game1 = null;
        sessionStorage.setItem("userLogged", JSON.stringify(loggedUser));
        localStorage.setItem(loggedUser.email, JSON.stringify(loggedUser));
        window.location.assign("./../html/games/firstEscapeRoom.html");
      });
      let continu = document.getElementById("continue");
      continu.addEventListener("click", () => {
        window.location.assign("./../html/games/firstEscapeRoom.html");
      });
    }
  } else {
    window.location.assign("./../html/login.html");
  }
});
