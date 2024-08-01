import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/public/kasa_red.svg" alt="Kasa Logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/Propo">A Propos</Link>
      </div>
    </div>
  );
};

export default Navigation;

/* Ce commposent et nav qui comportera un logo une Accueil et A Propos il aurro des liens vers 
 les pages quon leur on attribuer*/
