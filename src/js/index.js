import style from "../css/style.css";
import { Human } from "./entities/Human.js";
import { Ship } from "./entities/Ship.js";

const humanPlayer = new Human();
humanPlayer.gameboard.place(2, new Ship(2));
humanPlayer.gameboard.place(30, new Ship(1));
humanPlayer.gameboard.place(23, new Ship(4));

humanPlayer.gameboard.place(12, new Ship(3));

humanPlayer.gameboard.place(22, new Ship(4));

console.log(humanPlayer);
