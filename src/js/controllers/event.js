function attackHuman() {
  const boardCells = document.querySelectorAll(".human-board .board-cell");

  console.log(boardCells);
  const randomIndex = Math.floor(Math.random() * 100);

  const cell = boardCells[randomIndex];
  console.log(cell);
  if (cell.classList.contains("ship")) cell.classList.add("hit");
  else cell.classList.add("miss");
}

export function attackComputer() {
  const boardCells = document.querySelectorAll(".computer-board .board-cell");

  boardCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.classList.contains("ship")) cell.classList.add("hit");
      else cell.classList.add("miss");
      attackHuman();
    });
  });
}
