import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "page/Home";
import Detail from "page/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
