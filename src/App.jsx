import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Propo from "./pages/Propo";
import NotUndifin from "./pages/404";
import Apartment from "../src/components/Apartement";
import "./css/app.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Propo" element={<Propo />} />
        {/* path=* function si jamais  ne corespond pas */}
        <Route path="*" element={<NotUndifin />} />
        <Route path="/apartment/:id" element={<Apartment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
// Ce composent comporterra nos lien D'aceille ,Propo ,NotUndifin est Apartment
