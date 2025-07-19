import { game } from "../game";
import { showWinner } from "./winner";
import { disableAllCell, enableAllCell } from "./block-btn";

import { playerTurn } from "./player-turn";
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

      if (!(row < 0 || row > 9 || col < 0 || col > 9)) {
        ComputerSmartAI.possibleMoves.push(move);
      }
    });
  }
}

const randomAttackHuman = (human) => {
  const boardCells = document.querySelectorAll(
    ".human-board .board-cell:not(.hit):not(.miss)",
  );
  const randomIndex = Math.floor(Math.random() * boardCells.length);
  const cell = boardCells[randomIndex];
  human.receiveAttack([cell.dataset.rowIndex, cell.dataset.colIndex]);
  playerTurn("computer");

  if (cell.classList.contains("ship")) {
    cell.classList.add("hit");
    playerTurn("computer");

    ComputerSmartAI.possibleMoves = [];
    ComputerSmartAI.getAdjacentMoves(
      Number(cell.dataset.rowIndex),
      Number(cell.dataset.colIndex),
    );

    return attackHuman(human);
  } else cell.classList.add("miss");
  playerTurn("human");

  if (human.isAllShipSunk()) return showWinner("computer");
};

function attackHuman(human) {
  disableAllCell();
  playerTurn("computer");

  setTimeout(() => {
    if (ComputerSmartAI.possibleMoves.length !== 0) {
      const row = ComputerSmartAI.possibleMoves[0][0];
      const column = ComputerSmartAI.possibleMoves[0][1];

      const getCell = document.querySelector(
        `.human-board .board-cell[data-row-index = "${row}"][data-col-index = "${column}"]:not(.hit):not(.miss)`,
      );

      if (getCell !== null) {
        human.receiveAttack([row, column]);

        if (getCell.classList.contains("ship")) {
          getCell.classList.add("hit");
          ComputerSmartAI.possibleMoves = [];
          ComputerSmartAI.getAdjacentMoves(row, column);

          return attackHuman(human);
        } else {
          getCell.classList.add("miss");
          playerTurn("human");
        }
      } else {
        ComputerSmartAI.possibleMoves = [];
        playerTurn("human");

        randomAttackHuman(human);
      }
    } else {
      playerTurn("human");

      randomAttackHuman(human);
    }
    enableAllCell();
  }, 1000);
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
        else {
          cell.classList.add("miss");
          attackHuman(human);
        }

        if (computer.isAllShipSunk()) return showWinner("human");
      },
      { once: true },
    );
  });
}
