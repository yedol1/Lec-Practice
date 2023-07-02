import { io } from "socket.io-client";
import React, { useState, useEffect } from "react";
const socket = io("http://localhost:3001");

function Chat() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  });

  const handleMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleDateString();
      socket.emit("message", {
        name: username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };
  return (
    <div>
      <h1>실시간 채팅</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="사용자 이름을 입력하세요."
        />
        <h2>채팅</h2>
        <div>
          {messages.map((message, index) => (
            <p key={index}>
              {message.name} : {message.content} - {message.time}
            </p>
          ))}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSubmit}>전송</button>
      </form>
    </div>
  );
}
export default Chat;

// node server.js =>서버작동
