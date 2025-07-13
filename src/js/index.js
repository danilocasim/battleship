import style from "../css/style.css";
import { Human } from "./model/Human.js";
import { Computer } from "./model/Computer.js";
import { Ship } from "./model/Ship.js";
import { renderBoard } from "./views/dom-render.js";
import { attackComputer } from "./controllers/event.js";

const humanPlayer = new Human();
humanPlayer.gameboard.place([2, 2], new Ship(2), "horizontal");
humanPlayer.gameboard.place([1, 1], new Ship(4), "vertical");
humanPlayer.gameboard.place([0, 9], new Ship(4), "vertical");
humanPlayer.gameboard.place([9, 0], new Ship(3), "horizontal");

const computerPlayer = new Computer();
computerPlayer.gameboard.place([4, 2], new Ship(2), "horizontal");
computerPlayer.gameboard.place([1, 1], new Ship(4), "vertical");
computerPlayer.gameboard.place([1, 9], new Ship(4), "vertical");
computerPlayer.gameboard.place([9, 0], new Ship(3), "horizontal");

renderBoard(humanPlayer.gameboard.board, computerPlayer.gameboard.board);

attackComputer();
