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
    document.getElementById("greeting").classList.remove("hide");
    userName = localStorage.getItem("userName");
    const $sectionGreeting = document.getElementById("greeting");
    const $h1 = document.createElement("h1");
    $h1.textContent = userName + "님 안녕하세요";
    $sectionGreeting.appendChild($h1);
  };

  if (userName) {
    showGreeting();
  } else {
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
  const KEY = "cd9fca71fbee843c7a38d104afaf8bf8";
  const $sectionWeather = document.getElementById("weather");

  const getWeather = async ({ latitude, longitude }) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}&units=metric`
      );
      const json = await res.json();
      const { weather, main } = json;

      const $div = document.createElement("div");
      $div.classList.add("wrap-weather");
      const $span = document.createElement("span");
      const $img = document.createElement("img");
      $span.textContent = main.temp + "°C";
      $img.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

      $div.appendChild($img);
      $div.appendChild($span);

      $sectionWeather.appendChild($div);
    } catch (error) {
      const $div = document.createElement("div");
      $div.classList.add("wrap-weather");
      const $span = document.createElement("span");
      $span.textContent = "fail to load weahter";
      $div.appendChild($span);
      $sectionWeather.appendChild($div);
    }
  };
  if ("geolocation" in navigator) {
    console.log("위치정보 사용 가능");

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeather({ latitude, longitude });
    });
  } else {
    console.log("위치정보 사용 불가능");
  }

  // todo
  const $todoList = document.getElementById("todoList");
  const $todoForm = document.querySelector(".todo-box");

  let todos = [];

  $todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = e.target[0].value;
    if (!todo) return;

    todos.push({
      id: todos.length,
      desc: todo,
    });

    renderTodos();

    e.target[0].value = "";
    document.getElementById("todoInp").blur();
  });

  function renderTodos() {
    $todoList.innerHTML = "";
    todos.forEach((todo) => {
      const $li = document.createElement("li");
      const $inp = document.createElement("input");
      const $span = document.createElement("span");
      const $btn = document.createElement("button");

      $li.id = todo.id;
      $li.classList.add("todo");

      $inp.name = todo.id;
      $inp.id = todo.id;
      $inp.type = "checkbox";

      $span.textContent = todo.desc;
      $span.htmlFor = todo.id;

      $btn.classList.add("delete");
      $btn.textContent = "삭제";

      $li.appendChild($inp);
      $li.appendChild($span);
      $li.appendChild($btn);

      $btn.addEventListener("click", (e) => {
        deleteTodo(e.target.parentNode.id);
      });

      $todoList.appendChild($li);
    });
  }
  function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id != id);
    renderTodos();
  }
})();
