import React from "react";
import Background from "./components/Background";
import Greeting from "./components/Greeting";
import Clock from "./components/Clock";

function App() {
  return (
    <Background>
      <Greeting />
      <Clock />
    </Background>
  );
}

export default App;
