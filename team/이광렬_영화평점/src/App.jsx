import React from "react";
import GlobalStyle from "styles/GlobalStyle";
import Router from "./routes/router";
function App() {
  return (
    <React.Fragment>
      <Router />
      <GlobalStyle />
    </React.Fragment>
  );
}
export default App;
