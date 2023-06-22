const date = document.querySelector("h3#date");
const clock = document.querySelector("h2#clock");
const hour = clock.querySelector("#hour");
const minute = clock.querySelector("#minute");
const second = clock.querySelector("#second");
const ampm = document.querySelector("#ampm");

function getDate() {
  date.innerText = new Date().toLocaleDateString();
}
function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  let addZero;
  if (hours === 12) {
    addZero = "12";
    ampm.innerText = "오후";
  } else if (hours > 12) {
    addZero = String(hours - 12).padStart(2, "0");
    ampm.innerText = "오후";
  } else if (hours === 0) {
    addZero = "12";
    ampm.innerText = "오전";
  } else {
    addZero = String(hours).padStart(2, "0");
    ampm.innerText = "오전";
  }

  hour.innerText = `${addZero}`;
  minute.innerText = `${minutes}`;
  second.innerText = `${seconds}`;
}

getDate();
getClock();
setInterval(getClock, 1000);
