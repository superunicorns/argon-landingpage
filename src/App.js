import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";  

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
