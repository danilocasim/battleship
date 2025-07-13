import { generateBoard } from "./generateBoard";

export function renderBoard(human, computer) {
  const humanBoard = document.querySelector(".human-board");
  const computerBoard = document.querySelector(".computer-board");

  humanBoard.appendChild(generateBoard(human));
  computerBoard.appendChild(generateBoard(computer));
}
