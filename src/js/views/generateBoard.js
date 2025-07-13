function generateBoard(board) {
  const boardDiv = document.createElement("div");
  boardDiv.classList.add("board-div");
  board.forEach((row, rowIndex) => {
    const boardRow = document.createElement("div");
    boardRow.classList.add("board-row");

    row.forEach((cell, colIndex) => {
      const boardCell = document.createElement("button");
      boardCell.classList.add("board-cell");
      boardCell.dataset.rowIndex = rowIndex;
      boardCell.dataset.colIndex = colIndex;

      if (cell.length) boardCell.classList.add("ship");
      boardRow.appendChild(boardCell);
    });
    boardDiv.appendChild(boardRow);
  });

  return boardDiv;
}

export { generateBoard };
