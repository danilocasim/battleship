import { game } from "../game";

class ComputerSmartAI {
  static possibleMoves = [];

  static getAdjacentMoves(row, col) {
    const moves = [
      [row - 1, col],
      [row + 1, col],
      [row, col + 1],
      [row, col - 1],
    ];

    moves.forEach((move) => {
      const row = move[0];
      const col = move[1];
      console.log(move);

      if (!(row < 0 || row > 9 || col < 0 || col > 9)) {
        ComputerSmartAI.possibleMoves.push(move);
      }
    });
  }
}

function attackHuman(human) {
  const boardCells = document.querySelectorAll(
    ".human-board .board-cell:not(.hit):not(.miss)",
  );

  const randomIndex = Math.floor(Math.random() * boardCells.length);
  const cell = boardCells[randomIndex];
  human.receiveAttack([cell.dataset.rowIndex, cell.dataset.colIndex]);

  ComputerSmartAI.getAdjacentMoves(
    Number(cell.dataset.rowIndex),
    Number(cell.dataset.colIndex),
  );

  console.log(ComputerSmartAI.possibleMoves);

  if (cell.classList.contains("ship")) cell.classList.add("hit");
  else cell.classList.add("miss");

  if (human.isAllShipSunk()) game();
}

export function attackComputer(human, computer) {
  const computerBoardCells = document.querySelectorAll(
    ".computer-board .board-cell",
  );

  computerBoardCells.forEach((cell) => {
    cell.addEventListener(
      "click",
      (e) => {
        const cellRowIndex = cell.dataset.rowIndex;
        const cellColumnIndex = cell.dataset.colIndex;
        computer.receiveAttack([cellRowIndex, cellColumnIndex]);

        if (cell.classList.contains("ship")) cell.classList.add("hit");
        else cell.classList.add("miss");

        if (computer.isAllShipSunk()) game();
        else attackHuman(human);
      },
      { once: true },
    );
  });
}
