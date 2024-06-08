const basketballs = document.querySelector(".basketballs");
const basketballAmount = document.querySelector(".basketball-quantity");

const baseballs = document.querySelector(".baseballs");
const baseballAmount = document.querySelector(".baseball-quantity");

const totalBalls = document.querySelector(".total-balls");

basketballAmount.textContent = "total:";
const htmlbasket = "total:";
baseballAmount.textContent = "total:";
const htmlbase = "total:";


basketballs.addEventListener("change", numberOfBasketBalls);

let basketChoice = 0;
let baseChoice = 0;

function numberOfBasketBalls () {
  basketChoice = basketballs.value;

  if (basketChoice === "0") {
    basketballAmount.textContent = `${htmlbasket} 0`;
  } else if (basketChoice === "1") {
    basketballAmount.textContent = `${htmlbasket} 1`;
  } else if (basketChoice === "2") {
    basketballAmount.textContent = `${htmlbasket} 2`;
  } else if (basketChoice === "3") {
    basketballAmount.textContent = `${htmlbasket} 3`;
  } else {
    basketballAmount.textContent = "total:";
  }
  updateTotal();
}

baseballs.addEventListener("change", numberOfBaseballs);

function numberOfBaseballs () {
  baseChoice = baseballs.value;

  if (baseChoice === "0") {
    baseballAmount.textContent = `${htmlbase} 0`
  } else if (baseChoice === "1") {
    baseballAmount.textContent = `${htmlbase} 1`;
  } else if (baseChoice === "2") {
    baseballAmount.textContent = `${htmlbase} 2`;
  } else if (baseChoice === "3") {
    baseballAmount.textContent = `${htmlbase} 3`;
  } else {
    baseballAmount.textContent = "total:";
  }
  updateTotal();
}

totalBalls.textContent = "Total Balls: ";

function updateTotal() {
  totalBalls.textContent = "Total Balls: " + (Number(basketChoice) + Number(baseChoice));
}