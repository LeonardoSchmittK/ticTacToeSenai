let newTicTacToe;
class TicTacToe {
  player1;
  player2;
  table;
  gameTable = document.querySelector(".gameTable");
  toggleSign = "X";
  gameOn = false;
  btn;
  counterPlays = 0;
  matrix = [];
  isOver = false;

  constructor(btn) {
    btn.disabled = true;
    this.btn = btn;
    btn.classList.add("disabled");
    console.log(btn);
    this.printTable();
  }

  buildMatrix() {
    const signs = [];
    const cells = document.querySelectorAll(".table__cell");
    cells.forEach((item, id) => {
      if (item.childNodes[0]) {
        signs.push(item.childNodes[0].innerText);
      } else {
        signs.push("");
      }
    });

    this.matrix = buildSquaredMatrix(3, signs);
  }

  setIsOver(isOver) {
    this.isOver = isOver;
  }
  getIsOver() {
    return this.isOver;
  }

  getMatrix() {
    return this.matrix;
  }

  incrementCounterPlays() {
    this.setCounterPlays(this.getCounterPlays() + 1);
  }

  getCounterPlays() {
    return this.counterPlays;
  }

  setCounterPlays(conterPlays) {
    this.counterPlays = conterPlays;
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
    this.incrementCounterPlays();
    document.querySelector(".jogoHeader__counterPlays").innerText =
      this.getCounterPlays();
    let color;
    if (this.getToggleSign() === "X") {
      this.setToggleSign("O");
      color = "#f76d11";
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

    this.buildMatrix();

    if (this.getCounterPlays() >= 5) {
      this.checkForWinner();
    }

    if (this.isEndgame() && !this.isOver) {
      this.disableAllCells();
    }
  }

  disableAllCells() {
    document
      .querySelectorAll(".table__cell")
      .forEach((cell) => (cell.style.pointerEvents = "none"));
  }

  checkForWinner() {
    const winByColumns = checkColumnsEqual(this.getMatrix());
    const winByLines = checkLinesEqual(this.getMatrix());
    const winByDiagonalSecondaryDiagonal = checkSecondaryDiagonal(
      this.getMatrix()
    );
    const winByMainMatrix = checkMainDiagonalEqual(this.getMatrix());
    console.log(winByColumns + " __ COLUNAS");
    console.log(winByLines + " __ LINHAS");
    console.log(winByDiagonalSecondaryDiagonal + " __ SECUNDARIO");
    console.log(winByMainMatrix + " __ PRINCIPAL");
    if (
      winByColumns ||
      winByLines ||
      winByDiagonalSecondaryDiagonal ||
      winByMainMatrix
    ) {
      alert(this.toggleSign + " VENCEU!");
      this.setIsOver(true);
      this.disableAllCells();
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
    this.setCounterPlays(0);
    document.querySelector(".jogoHeader__counterPlays").innerHTML =
      this.getCounterPlays();
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
