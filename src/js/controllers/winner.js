export function getWinner(winner) {
  return winner === "human" ? "You Win!" : "Computer's Win";
}

export function showWinner(winner) {
  const h2 = document.querySelector("#winner");
  const dialog = document.querySelector("#announcement");

  h2.textContent = getWinner(winner);
  dialog.showModal();
}
