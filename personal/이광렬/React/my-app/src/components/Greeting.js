import React, { useState, useEffect } from "react";

function Greeting() {
  const [name, setName] = useState("");

  useEffect(() => {
    const userName = prompt("이름을 입력해주세요:");
    setName(userName);
  }, []);

  return <h1>Hello, {name}</h1>;
}

export default Greeting;
