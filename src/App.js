import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import Country from "./components/Country";
import Weather from "./components/Weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Country" element={<Country />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
