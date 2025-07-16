import { generateBoard } from "./generateBoard";

export function renderBoard(human, computer) {
  const oldHumanBoard = document.querySelectorAll(".human-board > .board-div");
  const oldComputerBoard = document.querySelectorAll(
    ".computer-board > .board-div",
  );
  oldHumanBoard.forEach((board, index) => {
    board.remove();
    oldComputerBoard[index].remove();
  });

  const humanBoard = document.querySelector(".human-board");
  const computerBoard = document.querySelector(".computer-board");

  humanBoard.appendChild(generateBoard(human));
  computerBoard.appendChild(generateBoard(computer));
}
