import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

import "./styles/App.css";

import { AuthProvider } from "./context/auth";

import Nav from './components/Header/Nav'
import Form2 from './pages/Formulaire/form2'
import Navbar from "./components/Header/Navbar";
import FormulaireFormik from './pages/Formulaire/FormulaireFormik'
import Login from "./pages/Login/Login";
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import { theme } from './theme/theme'
function App() {
  return (
    <div className="App font-telex">
      {/* <ThemeProvider theme={theme}> */}
      <AuthProvider>
        <Nav />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<FormulaireFormik />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App