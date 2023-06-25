import { useEffect, useState } from "react";
import styles from "./Clock.module.css";

const Clock = () => {
  const [cntTime, setCntTime] = useState(new Date());
  useEffect(() => {
    const time = setInterval(() => {
      setCntTime(new Date());
    }, 1000);
    // 함수 언마운트시 clearInterval
    return () => clearInterval(time);
  }, []);
  const date = cntTime.toLocaleDateString();
  const time = cntTime.toLocaleTimeString();

  return (
    <div className={styles.time_wrapper}>
      <span>{date}</span>
      <span>{time}</span>
    </div>
  );
};
export default Clock;
