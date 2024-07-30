import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../css/404.css";

const NotFound = () => {
  return (
    <div>
      <Navigation />
      <section className="error_container">
        <h1 className="error_title">404</h1>
        <p className="error_text">
          Oups! La page que vous demandez n'existe pas.
        </p>

        <Link className="error_link" to="/">
          Retourner sur la page d’accueil
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;

/*  Cette page a pour but detre une  error , ci on marque dans l'api une chausse qui nexiste pas sa
renvera sur cette page avec un lien pour revennire a laceile*/
