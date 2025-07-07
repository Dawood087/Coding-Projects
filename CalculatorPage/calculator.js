const input = document.querySelector(".calculator-input");
const buttons = document.querySelectorAll(".calculator-button");
const reset = document.querySelector(".delete");
const equal = document.querySelector(".equal");

buttons.forEach((button) => {
  if (
    !button.classList.contains("equal") &&
    !button.classList.contains("delete")
  ) {
    231;
    button.addEventListener("click", () => (input.value += button.textContent));
  }
});

reset.addEventListener("click", () => (input.value = ""));

equal.addEventListener("click", () => {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Fehler";
  }
});
