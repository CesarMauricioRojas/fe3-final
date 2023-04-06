import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favs")) || []
  );
    
  const addFav = () => {
    const isFav = favs.find((fav) => fav.id === dentist.id);
    if (!isFav) {
      setFavs([...favs, dentist]);
      localStorage.setItem("favs", JSON.stringify([...favs, dentist]));
    }
  };

  return (
    <div className="card">
      <br /><h3 className="title">Dentist</h3><br />
      <Link to={"/detail/" + dentist.id}>
        <img className="doctor-img" src="https://images.vexels.com/media/users/3/199903/isolated/preview/ef8a3b09efaa376859c4c8ccfa362b82-caracter-de-doctor-hombre.png" alt="" />
        <p style={{textAlign:"center"}}>{dentist.name}</p>
        <p style={{textAlign:"center"}}>{dentist.username}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    </div>
  );
};

export default Card;
