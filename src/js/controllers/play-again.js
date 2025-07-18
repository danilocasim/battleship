import { game } from "../game";

export function playAgainListener() {
  const playAgain = document.querySelector("#playAgain");
  const dialog = document.querySelector("#announcement");

  playAgain.addEventListener("click", () => {
    game();
    dialog.close();
  });
}
