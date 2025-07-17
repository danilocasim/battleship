import { Ship } from "../model/Ship";
import { Human } from "../model/Human";
import { renderBoard } from "../views/dom-render";
import { attackComputer } from "./event";
import { Computer } from "../model/Computer";

export function placeShipsRandom(playerBoard, ships) {
  const randomRow = (shipLength) => {
    return Math.floor(Math.random() * (10 - shipLength + 1));
  };
  const randomCol = (shipLength) => {
    return Math.floor(Math.random() * (10 - shipLength + 1));
  };

  ships.forEach((ship) => {
    let randomRowIndex = randomRow(ship);
    let randomColIndex = randomCol(ship);
    let randomAxis =
      Math.floor(Math.random() * 3) + 1 === 1 ? "horizontal" : "vertical";

    while (
      !playerBoard.place(
        [randomRowIndex, randomColIndex],
        new Ship(ship),
        randomAxis,
      )
    ) {
      randomRowIndex = randomRow(ship);
      randomColIndex = randomCol(ship);
      randomAxis =
        Math.floor(Math.random() * 3) + 1 === 1 ? "horizontal" : "vertical";
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
