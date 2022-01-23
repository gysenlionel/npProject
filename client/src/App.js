import * as React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/App.css";

import Navbar from "./components/Header/Navbar";
import Formulaire from "./pages/Formulaire/Formulaire";
import Login from "./pages/Login/Login";
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Formulaire />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App