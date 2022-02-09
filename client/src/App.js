import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

import "./styles/App.css";

import { AuthProvider } from "./context/auth";


import Nav from './components/Header/Nav'
import FormulaireFormik from './pages/Formulaire/FormulaireFormik'
import Login from "./pages/Login/Login";
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import { theme } from './theme/theme'
import Events from "./pages/Events/Events";
import News from "./pages/News/News"
import Shopping from "./pages/Shopping/Shopping"
import Profil from "./pages/Profil/Profil"
import CardDetails from "./components/CardDetails/CardDetails";


import { AuthContext } from './context/auth'

import RequireAuth from "./auth/RequireAuth";

function App() {

  const { user } = React.useContext(AuthContext)

  return (
    <div className="App font-telex">
      {/* <ThemeProvider theme={theme}> */}
      <AuthProvider>
        <Nav />

        <Routes>
          {/* public routes */}

          <Route path="/" element={<Home />} />
          <Route path="signup" element={<FormulaireFormik />} />
          <Route path="signin" element={<Login />} />
          <Route path='news' element={<News />} />
          <Route path='events' element={<Events />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path='shopping' element={<Shopping />} />
            <Route path='profil' element={<Profil />} />
            <Route path='events/:id' element={<CardDetails />} />
            <Route path='/:id' element={<CardDetails />} />
          </Route>


          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App