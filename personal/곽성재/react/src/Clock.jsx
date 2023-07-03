import { useEffect, useRef, useState } from "react";

const Clock = () => {
  const [now, setNow] = useState(new Date());
  const interval = useRef(null);
  const counter = useRef(0);
  useEffect(() => {
    interval.current = setInterval(() => {
      console.log(now, counter.current);
      counter.current++;
      setNow(new Date());
    }, 1000);
    return () => {
      console.log("a");
      clearInterval(interval.current);
    };
  }, [now]);
  return (
    <section id="clock">
      <h2>{now.toLocaleTimeString()}</h2>
    </section>
  );
};

export default Clock;
