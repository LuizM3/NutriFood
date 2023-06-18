import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Header from "./components/_header";
import Principal from './views/main_page';
import Login from "./views/login";
import SignUp from './views/sign_up';
import reportWebVitals from './reportWebVitals';
import Footer from "../src/components/_footer";
import Avaliacoes from "./views/avaliacoes";
import AvPrincipal from "./views/avaliacoes-rotas/av_principal";
import AvComplemento from "./views/avaliacoes-rotas/av_complemento";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/avaliacoes' element={<Avaliacoes />} />
        <Route path='/avaliacoes/principal' element={<AvPrincipal />} />
        <Route path='/avaliacoes/principal/complemento' element={<AvComplemento />} />
        <Route path='/' element={<Principal />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign_up' element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
