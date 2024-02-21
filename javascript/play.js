let play = document.getElementById("play");

play.addEventListener("click", () => {
  if (loggedUser != null) {
    let main = document.getElementsByTagName("main");
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
    let continu = document.getElementById("continue");
    continu.addEventListener("click", () => {
      main[0].innerHTML = `
      <h1 class="mb-4">Eligue un Escape Room</h1>
      <div>
      <button id="escr1" class="p-2 rounded-3 mx-3">
      <h2>ESCAPE ROOM 1</h2>
      </button>
      <button id="escr2" class="p-2 rounded-3">
      <h2>ESCAPE ROOM 2</h2>
      </button>
      </div>`;
      let escr1 = document.getElementById("escr1");
      escr1.addEventListener("click", () => {
        window.location.assign("./../html/games/firstEscapeRoom.html");
      });
    });
  } else {
    window.location.assign("./../html/login.html");
  }
});
