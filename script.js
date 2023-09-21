const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");

//limit for free users
const counterLimit = 100;

const limitIndicator = () => {
  counterValueEl.textContent = counterLimit;
  counterEl.classList.add("counter--limit");
  counterTitleEl.innerHTML = `limit! Buy <b>Pro</b> for > ${counterLimit}`;
  increaseButtonEl.disabled = true;
  decreaseButtonEl.disabled = true;
};
const incrementCounter = () => {
  +counterValueEl.textContent < counterLimit
    ? (counterValueEl.textContent = +counterValueEl.textContent + 1)
    : limitIndicator();
};

const decrementCounter = () => {
  +counterValueEl.textContent
    ? (counterValueEl.textContent = +counterValueEl.textContent - 1)
    : (counterValueEl.textContent = 0);
};

const resetCounter = () => {
  counterValueEl.textContent = 0;
  counterEl.classList.remove("counter--limit");
  counterTitleEl.textContent = "Fancy Counter";
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  resetButtonEl.blur();
};

increaseButtonEl.addEventListener("click", incrementCounter);

decreaseButtonEl.addEventListener("click", decrementCounter);

resetButtonEl.addEventListener("click", resetCounter());

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e.key === "ArrowRight") {
    incrementCounter();
  }
  if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
    decrementCounter();
  }
  if (e.key === "Backspace") {
    resetCounter();
  }
});
