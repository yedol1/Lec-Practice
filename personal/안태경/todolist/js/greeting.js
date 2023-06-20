const loginForm = document.querySelector("form#login__form");
const loginInput = loginForm.querySelector("input");
const showUsername = document.querySelector("h1#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function getUsername(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const newUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, newUsername);
  paintGreetings(newUsername);
}

function paintGreetings(username) {
  showUsername.innerText = `안녕하세요, ${username}님!`;
  showUsername.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  // 저장된 이름 없음 => 새 이름 받기
  loginForm.classList.remove(HIDDEN_CLASSNAME); //로그인 폼 나타내기
  loginForm.addEventListener("submit", getUsername); // 폼 제출하기 (이름받는과정시작)
} else {
  // 저장된 이름 있음 =>저장된 이름 가져오기
  paintGreetings(savedUsername);
}
