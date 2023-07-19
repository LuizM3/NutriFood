import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./views/MainPage";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import reportWebVitals from "./reportWebVitals";

import Reviews from "./views/Reviews";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/reviews" element={<Reviews />} />{" "}
        <Route path="/" element={<MainPage />} />{" "}
        <Route path="/login" element={<SignIn />} />{" "}
        <Route path="/sign-up" element={<SignUp />} />{" "}
      </Routes>{" "}
      <Footer />
    </Router>{" "}
  </React.StrictMode>
);

reportWebVitals();
