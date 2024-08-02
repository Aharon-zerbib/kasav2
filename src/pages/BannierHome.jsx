import React from "react";
import "../css/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__overlay" style={{ opacity: 0.6 }}></div>
      <img
        src="/public/images/banner.webp"
        alt="Banner"
        className="banner__image"
      />
      <h1 className="banner__title">
        Chez vous,
        <span>partout et ailleurs</span>
      </h1>
    </div>
  );
};

export default Banner;

// Ce coposent et la banier dans la page d'acceille elle comporterra une img aver un titelle
