export function disableAllCell() {
  const boardCells = document.querySelectorAll(".board-cell");
  console.log(boardCells);
  boardCells.forEach((cell) => (cell.disabled = true));
}

export function enableAllCell() {
  const boardCells = document.querySelectorAll(".board-cell");

  boardCells.forEach((cell) => cell.removeAttribute("disabled"));
}
