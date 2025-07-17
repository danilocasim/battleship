import { Human } from "./model/Human.js";
import { Computer } from "./model/Computer.js";
import { Ship } from "./model/Ship.js";
import { renderBoard } from "./views/dom-render.js";
import { attackComputer } from "./controllers/event.js";
import { randomShipListener } from "./controllers/random-ship.js";

export function game() {
  const humanPlayer = new Human();
  humanPlayer.gameboard.place([0, 2], new Ship(2), "horizontal");
  humanPlayer.gameboard.place([1, 1], new Ship(4), "vertical");
  humanPlayer.gameboard.place([0, 9], new Ship(4), "vertical");

  const computerPlayer = new Computer();
  computerPlayer.gameboard.place([4, 2], new Ship(4), "horizontal");
  computerPlayer.gameboard.place([1, 1], new Ship(4), "vertical");
  computerPlayer.gameboard.place([1, 9], new Ship(4), "vertical");
  computerPlayer.gameboard.place([1, 1], new Ship(4), "vertical");
  computerPlayer.gameboard.place([1, 9], new Ship(4), "vertical");
  randomShipListener();

  renderBoard(humanPlayer.gameboard.board, computerPlayer.gameboard.board);
  attackComputer(humanPlayer.gameboard, computerPlayer.gameboard);
}
