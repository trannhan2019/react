import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/fastui/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fastui" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
