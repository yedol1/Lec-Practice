import { useState } from "react";
import styles from "./Greeting.module.css";

const LoginForm = () => {
  const USERNAME_KEY = "username";
  const [username, setUsername] = useState("");
  // 이름 입력
  const onChange = (e) => setUsername(e.target.value);
  // 로그인
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(USERNAME_KEY, username);
    setUsername("");
  };
  // 로그아웃
  const onRemoveUser = () => {
    localStorage.removeItem(USERNAME_KEY);
    //새로고침 말고 그냥 폼만 로드하는 방법?
    window.location.reload();
    // savedName = null;
  };
  // 저장된 이름
  let savedName = localStorage.getItem(USERNAME_KEY);

  return (
    <div className={styles.greeting__wrapper}>
      {savedName ? (
        <div className={styles.greeting__greeting}>
          <h1>안녕하세요, {savedName}님!</h1>
          <button onClick={onRemoveUser}>로그아웃</button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className={styles.greeting__login_form}>
          <input
            value={username}
            type="text"
            onChange={onChange}
            placeholder="Write your name"
          />
        </form>
      )}
    </div>
  );
};
export default LoginForm;
