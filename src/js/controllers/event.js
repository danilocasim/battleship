import { game } from "../game";

function attackHuman(human) {
  const boardCells = document.querySelectorAll(
    ".human-board .board-cell:not(.hit):not(.miss)",
  );

  const randomIndex = Math.floor(Math.random() * boardCells.length);

  const cell = boardCells[randomIndex];
  human.receiveAttack([cell.dataset.rowIndex, cell.dataset.colIndex]);

  if (cell.classList.contains("ship")) {
    cell.classList.add("hit");
  } else cell.classList.add("miss");

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
