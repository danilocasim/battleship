import { Ship } from "../model/Ship";
import { Human } from "../model/Human";
import { renderBoard } from "../views/dom-render";
import { attackComputer } from "./event";
import { Computer } from "../model/Computer";

function placeShipsRandom(playerBoard) {
  const randomRow = (shipLength) => {
    return Math.floor(Math.random() * (10 - shipLength + 1));
  };
  const randomCol = (shipLength) => {
    return Math.floor(Math.random() * (10 - shipLength + 1));
  };

  for (let i = 1; i <= 5; i++) {
    let randomRowIndex = randomRow(4);
    let randomColIndex = randomCol(4);
    let randomAxis =
      Math.floor(Math.random() * 3) + 1 === 1 ? "horizontal" : "vertical";

    while (
      !playerBoard.place(
        [randomRowIndex, randomColIndex],
        new Ship(4),
        randomAxis,
      )
    ) {
      randomRowIndex = randomRow(4);
      randomColIndex = randomCol(4);
      randomAxis =
        Math.floor(Math.random() * 3) + 1 === 1 ? "horizontal" : "vertical";
    }
    playerBoard.place(
      [randomRowIndex, randomColIndex],
      new Ship(4),
      randomAxis,
    );
  }
}

function placeShip() {
  const humanPlayer = new Human();
  const computerPlayer = new Computer();

  placeShipsRandom(humanPlayer.gameboard);
  placeShipsRandom(computerPlayer.gameboard);

  renderBoard(humanPlayer.gameboard.board, computerPlayer.gameboard.board);
  attackComputer(humanPlayer.gameboard, computerPlayer.gameboard);
}

export function randomShipListener() {
  const randomShip = document.querySelector("#placeShipRandom");
  randomShip.addEventListener("click", placeShip);
}
