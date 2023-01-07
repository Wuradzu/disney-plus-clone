import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="detail/:id" element={<Detail/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
