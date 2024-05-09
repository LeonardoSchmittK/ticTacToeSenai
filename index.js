let newTicTacToe;
class TicTacToe {
  player1;
  player2;
  table;
  gameTable = document.querySelector(".gameTable");
  toggleSign = "X";
  gameOn = false;
  btn;

  constructor(btn) {
    btn.disabled = true;
    this.btn = btn;
    btn.classList.add("disabled");
    console.log(btn);
    this.printTable();
  }

  printTable() {
    for (let i = 0; i < 9; ++i) {
      const cell = document.createElement("div");
      cell.classList.add("table__cell");
      cell.classList.add(`table__cell-${i}`);
      this.gameTable.appendChild(cell);
      console.log(cell);

      cell.onclick = () => this.printPlayerSign(cell);

      if (i <= 2) {
        cell.classList.add("upper");
      } else if (i > 6) {
        cell.classList.add("lower");
      } else if (i >= 2 && i < 6) {
        cell.classList.add("middle");
      }
    }
  }

  printPlayerSign(cell) {
    let color;
    if (this.getToggleSign() === "X") {
      this.setToggleSign("O");
      color = "#7A08F7";
    } else {
      color = "#73FF00";
      this.setToggleSign("X");
    }
    const title = document.createElement("h1");
    title.innerText = this.getToggleSign();
    title.classList.add("cell__title");
    cell.style.pointerEvents = "none";
    cell.style.userSelect = "none";
    cell.style.color = color;
    cell.appendChild(title);

    if (this.isEndgame()) {
      alert("ola");
    }
  }

  isEndgame() {
    const content = [];
    document
      .querySelectorAll(".table__cell")
      .forEach((cell) => cell.innerText && content.push(cell.innerText));

    return content.length == document.querySelectorAll(".table__cell").length;
  }

  rematch() {
    document.querySelectorAll(".table__cell").forEach((cell) => {
      this.gameTable.removeChild(cell);
    });

    this.printTable();
  }

  getToggleSign() {
    return this.toggleSign;
  }

  setToggleSign(toggleSign) {
    this.toggleSign = toggleSign;
  }

  setPlayer1(player1) {
    this.player1 = player1;
  }

  setPlayer2(player2) {
    this.player2 = player2;
  }

  getPlayer1() {
    return this.player1;
  }

  getPlayer2() {
    return this.player2;
  }

  getTable() {
    this.table;
  }

  setTable(table) {
    this.table = table;
  }

  setGameTable(gameTable) {
    this.gameTable = gameTable;
  }

  getGameTable() {
    return this.gameTable;
  }
}
