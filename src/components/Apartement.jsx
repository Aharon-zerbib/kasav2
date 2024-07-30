import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../pages/Navigation";
import CollapsibleSection from "./CollapsibleSection";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/Apartment.css";

//Configuration de Composant
const Apartment = () => {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null); //initialiser a null pour stocker les données de l'appartement
  const [error] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); //initialiser a 0 pour gerer l'index dans le carrouse

  //Chargement des Données on recuper la data
  useEffect(() => {
    fetch(`/data/data.json`) //requette pour obtenir les données JSON
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const foundApartment = data.find((apartment) => apartment.id === id); //Cherche l'appartement correspondant a l'ID
        setApartment(foundApartment);
      });
  });

  // Creation de Carousel
  const nextSlide = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        prevIndex === apartment.pictures.length - 1 ? 0 : prevIndex + 1 //sinon passe à l'image suivante
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        prevIndex === 0 ? apartment.pictures.length - 1 : prevIndex - 1 //sinon passe à l'image précédente
    );
  };

  // Implementation des etoiles
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={`fas fa-star ${i < rating ? "filled" : ""}`}></i> //Ajout étoile au tableau
      );
    }
    return stars;
  };

  if (error) {
    // erreur s'est produite
    return <div>Error: {error}</div>;
  }

  if (!apartment) {
    //pas encore chargées
    return <div>Loading...</div>;
  }

  //Apelle des data pour les afficher sur norte pages
  return (
    <div>
      <Navigation />
      <div className="gallery-container">
        <button className="prev-button" onClick={prevSlide}>
          <i className="fas fa-chevron-left fa-3x"></i>
        </button>
        <div className="gallery">
          {apartment.pictures.length > 0 && (
            <>
              <img
                src={apartment.pictures[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1} of ${apartment.title}`}
              />
              <div className="counter">
                {currentImageIndex + 1} / {apartment.pictures.length}
              </div>
            </>
          )}
        </div>
        <button className="next-button" onClick={nextSlide}>
          <i className="fas fa-chevron-right fa-3x"></i>
        </button>
      </div>
      <div className="pourFooter">
        <div className="description">
          <div className="lesTitre">
            <h1>{apartment.title}</h1>
            <p>{apartment.location}</p>
          </div>
          <div className="host">
            <p>{apartment.host.name}</p>
            <img src={apartment.host.picture} alt={apartment.host.name} />
          </div>
        </div>{" "}
        <div className="rating">{renderStars(apartment.rating)}</div>
        <div className="Tags">
          <ul>
            {apartment.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="Colaps">
          <CollapsibleSection
            title="Description"
            content={apartment.description}
          />
          <CollapsibleSection
            title="Équipements"
            content={
              <ul>
                {apartment.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
      <footer>
        <div className="footerContainer">
          <img src="../public/kasa_white.svg" alt="kasa" />
          <p className="PFooter">© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Apartment;
