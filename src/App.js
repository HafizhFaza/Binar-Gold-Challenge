import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cars from "./pages/Cars";
import DetailCar from "./pages/DetailCar";
import Home from "./pages/Home";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findmobil" element={<Cars />} />
        <Route path="/detailmobil" element={<DetailCar />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
