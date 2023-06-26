import * as React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* :id =>다이나믹 url */}
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
