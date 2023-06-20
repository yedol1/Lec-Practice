(() => {
  console.log("IIFE");

  // random background
  const DEFAULT_PATH = "./assets/";
  const imgPaths = [
    "bg-bicycle.jpeg",
    "bg-bunny.jpeg",
    "bg-forest.jpeg",
    "bg-japan.jpeg",
    "bg-ocean.jpg",
    "bg-wall.jpeg",
  ];
  const App = document.getElementById("app");
  App.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${
    DEFAULT_PATH + imgPaths[Math.floor(Math.random() * imgPaths.length)]
  })`;

  // greeting
  let userName = localStorage.getItem("userName");
  const $loginForm = document.querySelector(".login-box");

  const showGreeting = () => {
    $loginForm.remove();
    userName = localStorage.getItem("userName");
    const $sectionGreeting = document.getElementById("greeting");
    const $h1 = document.createElement("h1");
    $h1.textContent = userName + "님 안녕하세요";
    $sectionGreeting.appendChild($h1);
  };

  if (userName) showGreeting();
  else {
    document.getElementById("greeting").classList.remove("hide");
    $loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userName = document.getElementById("userName").value.trim();
      if (userName) {
        document.getElementById("userName").value = "";
        // blur(): Remove focus from a text input
        document.getElementById("userName").blur();
        localStorage.setItem("userName", userName);
        showGreeting();
      }
    });
  }

  // clock
  const $sectionClock = document.getElementById("clock");
  const $h2 = document.createElement("h2");
  const showTime = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const AMPM = hours > 12 ? "PM" : "AM";

    const addZero = (num) => {
      let result = String(num);
      return result.length === 1 ? "0" + result : result;
    };

    $h2.textContent = `${AMPM} ${addZero(hours)} : ${addZero(
      minutes
    )} : ${addZero(seconds)}`;

    $sectionClock.appendChild($h2);
  };
  showTime();
  setInterval(showTime, 1000);

  // weather

  // todo
})();
