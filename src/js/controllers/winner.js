export function getWinner(winner) {
  return winner === "human" ? "You Win!" : "Computer's Win";
}

export function showWinner(winner) {
  const h2 = document.querySelector("#winner");
  const dialog = document.querySelector("#announcement");
  const container = document.querySelector(".container");

  h2.textContent = getWinner(winner);
  dialog.showModal();
  container.classList.add("blur");
}
