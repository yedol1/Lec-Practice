import { useEffect, useState } from "react";
import styles from "./css/Greeting.module.css";
import TodoList from "./Todo";

const LoginForm = () => {
  const USERNAME_KEY = "username";
  const [username, setUsername] = useState("");
  const [savedName, setSavedName] = useState(null);

  // 저장된 이름 있으면 불러오기
  useEffect(() => {
    const setName = localStorage.getItem(USERNAME_KEY);
    if (setName) {
      setSavedName(setName);
    } else setUsername("");
  }, [savedName]);

  // 이름 입력
  const onChange = (e) => setUsername(e.target.value);

  // 로그인 및 로컬스토리지 저장
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(USERNAME_KEY, username);
    setSavedName(username);
    setUsername("");
  };
  // 로그아웃
  const onRemoveUser = () => {
    localStorage.removeItem(USERNAME_KEY);
    setSavedName(null);
    //새로고침 말고 그냥 폼만 로드하는 방법? 수정완료!
    // window.location.reload();
  };

  return (
    <div className={styles.greeting__wrapper}>
      {savedName ? (
        <div className={styles.greeting__greeting}>
          <div>
            <h1>안녕하세요, {savedName}님!</h1>
            <button className={styles.logout} onClick={onRemoveUser}>
              로그아웃
            </button>
          </div>
          <TodoList />
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
