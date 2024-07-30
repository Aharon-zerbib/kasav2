import React from "react";
import "../css/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__overlay" style={{ opacity: 0.6 }}></div>
      <img
        src="src/assets/images/banner_about.webp"
        alt="Banner"
        className="banner__image"
      />
      <h1 className="banner__title">
        Chez vous, <span>partout et ailleurs</span>
      </h1>
    </div>
  );
};

export default Banner;

// Ce coposent et la banier dans la page A Propo elle comporterra une img aver un titelle
