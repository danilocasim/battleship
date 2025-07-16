export class Gameboard {
  board = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.board.push([]);
      for (let j = 0; j < 10; j++) {
        this.board[i].push({ isHit: false, coordinates: [i, j] });
      }
    }
  }

  checkShip(rowIndex, colIndex) {
    if (this.board[rowIndex][colIndex].length) return true;
  }

  place(index, ship, position) {
    const rowIndex = index[0];
    const colIndex = index[1];
    if (position === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        if (this.checkShip(rowIndex, colIndex + i)) return false;
        this.board[rowIndex][colIndex + i] = ship;
      }
    }
    if (position === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        if (this.checkShip(rowIndex + i, colIndex)) return false;
        this.board[rowIndex + i][colIndex] = ship;
      }
    }
  }

  receiveAttack(index) {
    const rowIndex = index[0];
    const colIndex = index[1];

    return this.board[rowIndex][colIndex].length
      ? this.board[rowIndex][colIndex].hit()
      : (this.board[rowIndex][colIndex].isHit = true);
  }

  isAllShipSunk() {
    const existingShips = this.board.flat().filter((ship) => ship.length);

    return existingShips.every((ship) => ship.isSunk());
  }
}
