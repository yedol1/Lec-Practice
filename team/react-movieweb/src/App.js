import * as React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import styled from "styled-components";

const AppWrapper = styled.div`
  box-sizing: border-box;
  /* background-color: black; */
`;

function App() {
  return (
    <React.Fragment>
      <Reset />
      <AppWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* :id =>다이나믹 url */}
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </AppWrapper>
    </React.Fragment>
  );
}

export default App;
