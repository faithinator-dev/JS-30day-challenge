const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const resultDisplay = document.getElementById("result");
const rateDisplay = document.getElementById("rate");
const swapBtn = document.getElementById("swap");
const card = document.getElementById("card");

async function convert() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amt = amount.value;

  card.classList.add("loading-overlay");
  try {
    const res = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${from}`,
    );
    const data = await res.json();
    const rate = data.rates[to];
    const total = (amt * rate).toFixed(2);

    resultDisplay.innerText = `${total} ${to}`;
    rateDisplay.innerText = `1 ${from} = ${rate.toFixed(4)} ${to}`;
  } catch (err) {
    resultDisplay.innerText = "Error";
    rateDisplay.innerText = "Failed to fetch rates";
  }
  card.classList.remove("loading-overlay");
}

amount.addEventListener("input", convert);
fromCurrency.addEventListener("change", convert);
toCurrency.addEventListener("change", convert);

swapBtn.onclick = () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
  convert();
};


convert();
