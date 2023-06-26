import Greeting from "components/Greeting";
import Clock from "components/Clock";
import Background from "components/Background";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Background />
      <Clock />
      <Greeting />
    </div>
  );
}

export default App;
