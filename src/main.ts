import "./style.css";

let counter: number = 0;
document.body.innerHTML = `
  <img src="/ado-plush.png" alt="Ado Plush" />
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">🦷</button>
`;
const button = document.getElementById("increment")!;
const counterElement = document.getElementById("counter")!;

button.addEventListener("click", () => {
  counter++;
  counterElement.innerHTML = counter.toString();
});
