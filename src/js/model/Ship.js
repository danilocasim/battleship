export class Ship {
  constructor(length) {
    this.length = length;
    this.numberOfHits = 0;
  }

  hit() {
    this.numberOfHits++;
  }

  isSunk() {
    return this.length === this.numberOfHits ? true : false;
  }
}
