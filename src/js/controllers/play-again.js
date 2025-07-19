import { game } from "../game";
import { removeBlur } from "./blur-dialog-open";
export function playAgainListener() {
  const playAgain = document.querySelector("#playAgain");
  const dialog = document.querySelector("#announcement");

  playAgain.addEventListener("click", () => {
    game();
    dialog.close();
    removeBlur();
  });
}
