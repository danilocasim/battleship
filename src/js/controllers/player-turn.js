export function playerTurn(player) {
  const turn = document.querySelector(".player-turn h2");
  if (player === "human") {
    turn.textContent = "Your Turn";
  }
  if (player === "computer") {
    turn.textContent = "Computer's Turn";
  }
}
