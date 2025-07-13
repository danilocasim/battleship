import style from "../css/style.css";
import { Human } from "./entities/Human.js";
import { Ship } from "./entities/Ship.js";

const humanPlayer = new Human();
humanPlayer.gameboard.place([2, 2], new Ship(2), "horizontal");
humanPlayer.gameboard.place([1, 1], new Ship(4), "vertical");
// humanPlayer.gameboard.place([5, 5], new Ship(4), "horizontal");

// humanPlayer.gameboard.place([3, 3], new Ship(3), "horizontal");

// humanPlayer.gameboard.place([1, 5], new Ship(4), "horizontal");

humanPlayer.gameboard.receiveAttack([2, 2]);
humanPlayer.gameboard.receiveAttack([2, 3]);

humanPlayer.gameboard.receiveAttack([1, 1]);
humanPlayer.gameboard.receiveAttack([2, 1]);
humanPlayer.gameboard.receiveAttack([3, 1]);
humanPlayer.gameboard.receiveAttack([4, 1]);

console.log(humanPlayer.gameboard.board);
console.log(humanPlayer.gameboard.isAllShipSunk());
