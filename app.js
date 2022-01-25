"use strict";
const again = document.getElementById("again");
const random = document.getElementById("random");
const btns = document.getElementById("btns");

function againNoShow() {
  again.disabled = true;
  again.style.opacity = "0";
}

function againShow() {
  again.disabled = false;
  again.style.opacity = "1";
}
function createSix() {
  for (let i = 1; i <= 6; i++) {
    const div = document.createElement("div");
    div.classList.add("colour-choices");
    div.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    document.querySelector("#container").appendChild(div);
  }
}
function createThree() {
  for (let i = 1; i <= 3; i++) {
    const div = document.createElement("div");
    div.classList.add("colour-choices");
    div.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    document.querySelector("#container").appendChild(div);
  }
}
function execute() {
  const choices = Array.from(document.getElementsByClassName("colour-choices"));
  random.textContent =
    choices[Math.floor(Math.random() * choices.length)].style.backgroundColor;

  choices.forEach((choice, idx, arr) => {
    choice.addEventListener("click", function () {
      if (random.textContent !== choice.style.backgroundColor)
        choice.classList.add("hidden");
      if (random.textContent === choice.style.backgroundColor) {
        choices.forEach((cho) => {
          cho.classList.remove("hidden");
          cho.style.backgroundColor = choice.style.backgroundColor;
        });
        againShow();
      }
    });
  });
}

function showSix() {
  againNoShow();
  createSix();
  execute();
}

function showThree() {
  againNoShow();
  createThree();
  execute();
}
showSix();
function clear() {
  const choices = Array.from(document.getElementsByClassName("colour-choices"));

  for (let i = 0; i < choices.length; i++) {
    const div = choices[i];
    document.querySelector("#container").removeChild(div);
  }
}
 function load(e) {
  if (!e.target.closest("button")) return;
  clear();
  const id = e.target.id;

  if (id === "hard" || id === "again" || id === "new-colours") showSix();
  if (id === "easy") showThree();
}
btns.addEventListener("click",load);
