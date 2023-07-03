import { useState } from "react"
import Timer from "./Timer";

const ToggleTimer = () => {
  const [isShowTimer, setIsShowTimer] = useState(true);

  return (
    <>
      {isShowTimer ? <Timer /> : null}
      <button onClick={() => { setIsShowTimer((prev) => !prev) }}>Toggle timer {isShowTimer ? 'Hide' : 'Show' }</button>
    </>
  )
}

export default ToggleTimer