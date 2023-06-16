import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/_header";
// import Footer from "./components/_footer";
import ReactDOM from 'react-dom';
import Principal from './views/main_page';
import Login from "./views/login";
import SignUp from './views/sign_up';
import reportWebVitals from './reportWebVitals';
import Footer from "../src/components/_footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign_up' element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
