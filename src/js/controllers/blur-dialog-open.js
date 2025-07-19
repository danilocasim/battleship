export function removeBlur() {
  const container = document.querySelector(".container");
  const dialog = document.querySelector("dialog");

  dialog.addEventListener("close", () => {
    container.classList.remove("blur");
  });
}
