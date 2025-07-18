import { Ship } from "../model/Ship";
import { Human } from "../model/Human";
import { renderBoard } from "../views/dom-render";
import { attackComputer } from "./random-attack";
import { Computer } from "../model/Computer";

export function placeShipsRandom(playerBoard, ships) {
  const randomRow = (shipLength, axis) => {
    if (axis === "horizontal") return Math.floor(Math.random() * 10);
    return Math.floor(Math.random() * (10 - shipLength));
  };
  const randomCol = (shipLength, axis) => {
    if (axis === "vertical") return Math.floor(Math.floor(Math.random() * 10));
    return Math.floor(Math.random() * (10 - shipLength));
  };

  ships.forEach((ship) => {
    let randomAxis =
      Math.floor(Math.random() * 3) + 1 === 1 ? "horizontal" : "vertical";
    let randomRowIndex = randomRow(ship, randomAxis);
    let randomColIndex = randomCol(ship, randomAxis);

    while (
      !playerBoard.place(
        [randomRowIndex, randomColIndex],
        new Ship(ship),
        randomAxis,
      )
    ) {
      randomAxis =
        Math.floor(Math.random() * 3) + 1 === 1 ? "horizontal" : "vertical";
      randomRowIndex = randomRow(ship, randomAxis);
      randomColIndex = randomCol(ship, randomAxis);
    }
    playerBoard.place(
      [randomRowIndex, randomColIndex],
      new Ship(ship),
      randomAxis,
    );
  });
}

function placeShip() {
  const humanPlayer = new Human();
  const computerPlayer = new Computer();

  placeShipsRandom(humanPlayer.gameboard, [4, 4, 3, 3, 2, 2, 1, 1]);
  placeShipsRandom(computerPlayer.gameboard, [4, 4, 3, 3, 2, 2, 1, 1]);

  renderBoard(humanPlayer.gameboard.board, computerPlayer.gameboard.board);
  attackComputer(humanPlayer.gameboard, computerPlayer.gameboard);
}

export function randomShipListener() {
  const randomShip = document.querySelector("#placeShipRandom");
  randomShip.addEventListener("click", placeShip);
}
