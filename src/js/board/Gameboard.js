export class Gameboard {
  board = [];
  constructor() {
    for (let i = 0; i < 100; i++) {
      this.board.push({ isHit: false });
    }
  }

  place(index, ship) {
    this.board[index] = ship;
  }

  receiveAttack(index) {
    return this.board[index].length
      ? this.board[index].hit()
      : (this.board[index].isHit = true);
  }

  isAllShipSunk() {
    const existingShips = this.board.filter((b) => b.length);
    return existingShips.every((ship) => ship.isSunk());
  }
}
