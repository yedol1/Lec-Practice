import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    case "RESET":
      return initialState
    default:
      return state
  }
}

const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>숫자세기</h1>
      <p>값 : {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT"})}>+++++</button>
      <button onClick={() => dispatch({ type: "DECREMENT"})}>-----</button>
      <button onClick={() => dispatch({ type: "RESET"})}>Reset</button>
    </>
  )

}

export default CountReducer;