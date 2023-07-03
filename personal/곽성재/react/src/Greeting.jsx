import { useRef, useState } from "react";

const Greeting = () => {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const userNameInp = useRef("");

  const onSubmitUserName = (e) => {
    e.preventDefault();
    const enteredUserName = userNameInp.current.value.trim();
    console.log(enteredUserName.length);
    if (enteredUserName.length > 1) {
      localStorage.setItem("userName", userNameInp.current.value);
      setUserName(enteredUserName);
      userNameInp.current.value = "";
    } else {
      alert("두 글자 이상의 성함을 입력해주세요(공백제외)");
    }
  };

  return (
    <section id="greeting">
      <form
        className={"login-box" + (userName ? " hide" : " ")}
        onSubmit={onSubmitUserName}
      >
        <div className="input-box">
          <input type="text" id="userName" ref={userNameInp} />
          <label htmlFor="userName">이름을 입력해주세요</label>
        </div>
      </form>
      {userName ? <h1>{userName}님 안녕하세요!</h1> : null}
    </section>
  );
};
export default Greeting;
