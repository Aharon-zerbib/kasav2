import React from "react";
import { Link } from "react-router-dom";
import "../css/AccommodationSquare.css";

const AccommodationSquare = ({ apartment }) => {
  return (
    <section className="container">
      <Link to={`/apartment/${apartment.id}`}>
        <div className="accommodation-square">
          <div className="image-container">
            <img src={apartment.cover} alt={apartment.title} />
            <div className="overlay"></div>
            <h3 className="image-title">{apartment.title}</h3>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default AccommodationSquare;

//Lien ver les appartement sur notre pague par defaut (qui comportera une cover et un titre )
