export class Gameboard {
  board = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.board.push([]);
      for (let j = 0; j < 10; j++) {
        this.board[i].push({ isHit: false });
      }
    }
  }

  checkShip(index, ship, position) {
    if (position === "horizontal")
      for (let i = 0; i < ship.length; i++) {
        if (this.board[index[0]][index[1] + i].length) return true;
      }

    if (position === "vertical")
      for (let i = 0; i < ship.length; i++) {
        if (this.board[index[0] + i][index[1]].length) return true;
      }
  }

  place(index, ship, position) {
    const rowIndex = index[0];
    const colIndex = index[1];
    if (position === "horizontal") {
      if (this.checkShip(index, ship, position)) return false;

      for (let i = 0; i < ship.length; i++) {
        this.board[rowIndex][colIndex + i] = ship;
      }
      return true;
    }
    if (position === "vertical") {
      if (this.checkShip(index, ship, position)) return false;

      for (let i = 0; i < ship.length; i++) {
        this.board[rowIndex + i][colIndex] = ship;
      }
      return true;
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
