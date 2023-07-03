import { useReducer } from "react"

const initialState = {
  theme: 'light'
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      }
    default:
      return {
        ...state
      }
  }
}

const ChangeTheme = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Current Theme : { state.theme }</p>
      <button onClick={() => { dispatch({type: "TOGGLE_THEME"}) }}>Toggle Theme</button>
    </>
  )
}

export default ChangeTheme