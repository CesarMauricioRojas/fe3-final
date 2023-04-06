import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  
  const favs = localStorage.getItem('favs')
  let parsedFavs = JSON.parse(favs) || []
  return (
    <div className="fadeIn">
      <br />
      <h1>Dentists Favs</h1>
      <br /><br />
      <div className="card-grid zoomIn">
        {parsedFavs.map(usersFavs => (
            <div className="dentist-favs">
              <img className="doctor-img" src="https://images.vexels.com/media/users/3/199903/isolated/preview/ef8a3b09efaa376859c4c8ccfa362b82-caracter-de-doctor-hombre.png" alt="" />
              <h3>{usersFavs.name}</h3>
            </div>
        ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
