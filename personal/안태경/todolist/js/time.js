const date = document.querySelector("h3#date");
const clock = document.querySelector("h2#clock");

function getDate() {
  date.innerText = new Date().toLocaleDateString();
}
function getClock() {
  clock.innerText = new Date().toLocaleTimeString();
}

getDate();
getClock();
setInterval(getClock, 1000);
