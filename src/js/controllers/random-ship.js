import { Ship } from "../model/Ship";
import { Human } from "../model/Human";
import { renderBoard } from "../views/dom-render";
import { attackComputer } from "./event";
import { Computer } from "../model/Computer";

function placeShipsRandom(playerBoard) {
  const existingPosition = [];
  const randomRow = (shipLength) => {
    return Math.floor(Math.random() * (10 - shipLength + 1));
  };
  const randomCol = (shipLength) => {
    return Math.floor(Math.random() * (10 - shipLength + 1));
  };

  for (let i = 1; i <= 10; i++) {
    const randomRowIndex = randomRow(4);
    const randomColIndex = randomCol(4);
    const randomAxis =
      Math.floor(Math.random() * 3) + 1 === 1 ? "horizontal" : "vertical";

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
