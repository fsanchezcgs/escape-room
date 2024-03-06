let play = document.getElementById("play");

// comprova quan sa pitjat el boto de jugar
play.addEventListener("click", () => {
  // Comprova si la recuperacio a trovat un usuari
  if (loggedUser != null) {
    let main = document.getElementsByTagName("main");
    // si no ha començat una partida, o ha acabat nomes es mostra el boto de nova partida
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
        // guarda l'estat de la partida com ha no començada
        loggedUser.games.game1 = null;
        sessionStorage.setItem("userLogged", JSON.stringify(loggedUser));
        localStorage.setItem(loggedUser.email, JSON.stringify(loggedUser));
        // envia l'usuari al primer escape room
        window.location.assign("./../html/games/firstEscapeRoom.html");
      });
      // sino ensenaya el boto de nova partida i el de continuar partida
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
        // guarda l'estat de la partida com ha no començada
        loggedUser.games.game1 = null;
        sessionStorage.setItem("userLogged", JSON.stringify(loggedUser));
        localStorage.setItem(loggedUser.email, JSON.stringify(loggedUser));
        // envia l'usuari al primer escape room
        window.location.assign("./../html/games/firstEscapeRoom.html");
      });
      let continu = document.getElementById("continue");
      continu.addEventListener("click", () => {
        // envia l'usuari al primer escape room
        window.location.assign("./../html/games/firstEscapeRoom.html");
      });
    }
  } else {
    // si no es detecta cap usuari l'usuari es rederigit a la pagina de login
    window.location.assign("./../html/login.html");
  }
});
