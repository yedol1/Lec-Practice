import { useRef } from "react";
import Weather from "./Weather";
import Clock from "./Clock";
import Greeting from "./Greeting";
import TodoList from "./TodoList";

const IMG_PATHS = [
  "src/assets/bg-bicycle.jpeg",
  "src/assets/bg-bunny.jpeg",
  "src/assets/bg-forest.jpeg",
  "src/assets/bg-japan.jpeg",
  "src/assets/bg-ocean.jpg",
  "src/assets/bg-wall.jpeg",
];

function App() {
  const imgPathIdx = useRef(Math.floor(Math.random() * IMG_PATHS.length));

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${
          IMG_PATHS[imgPathIdx.current]
        })`,
      }}
    >
      <Weather />
      <Clock />
      <Greeting />
      <TodoList />
    </div>
  );
}

export default App;
