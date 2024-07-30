import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Banner from "./BannierHome";
import Footer from "./Footer";
import AccommodationSquare from "../components/AccommodationSquare";
import "../css/listAppartemen.css";
import "../css/footer.css";

//Configuration de Composant
const Home = () => {
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState(null);
  const [visibleApartments, setVisibleApartments] = useState(6);
  const apartmentsPerPage = 6;

  //Chargement des Données on recuper la data
  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setApartments(data)) //Une fois données reçues metre a jour l'état
      .catch((error) => setError(error.message)); //Une fois données reçues metre a jour l'état avec error
  }, []);

  const handleShowMore = () => {
    setVisibleApartments((prevVisible) => prevVisible + apartmentsPerPage); // Met à jour l'état visibleApartments en ajoutant apartmentsPerPage
  };

  // On afficherra "Navigation ,Banner ,AccommodationSquare" pour notre Homme
  return (
    <div>
      <Navigation />
      <Banner />
      {error ? (
        <div className="error">Error fetching apartments: {error}</div>
      ) : (
        <div className="apartment-list">
          {apartments.slice(0, visibleApartments).map((apartment) => (
            <AccommodationSquare key={apartment.id} apartment={apartment} />
          ))}
          {visibleApartments < apartments.length && (
            <button className="show-more" onClick={handleShowMore}>
              Voir plus
            </button>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
