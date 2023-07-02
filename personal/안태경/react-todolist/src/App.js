import Greeting from "components/Greeting";
import Clock from "components/Clock";
import Background from "components/Background";
import Weather from "components/Weather";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Background />
      <Weather />
      <Clock />
      <Greeting />
    </div>
  );
}

export default App;
