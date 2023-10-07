import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./views/MainPage";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import reportWebVitals from "./reportWebVitals";
import About from "./views/About"
import Menu from "./views/Menu"
import Reviews from "./views/Reviews";
import Suggestions from "./views/Suggestions";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/reviews" element={<Reviews />} />{" "}
        <Route path="/" element={<MainPage />} />{" "}
        <Route path="/login" element={<SignIn />} />{" "}
        <Route path="/sign-up" element={<SignUp />} />{" "}
        <Route path="/about" element={<About />} /> {" "}
        <Route path="/menu" element={<Menu/>} /> {" "}
        <Route path="/suggestions" element={<Suggestions />} /> {" "}

      </Routes>{" "}
    </Router>{" "}
  </React.StrictMode>
);

reportWebVitals();
