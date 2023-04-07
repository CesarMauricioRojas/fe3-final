import { Link } from "react-router-dom";
import dentista from "../img/doctor.jpg"

const Card = ({ dentist }) => {
    
  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const isFav = favs.find((fav) => fav.id === dentist.id);
    if (!isFav) {
      favs.push(dentist);
      localStorage.setItem("favs", JSON.stringify(favs));
    }
  };

  return (
    <div className="card">
      <br /><h3 className="title">Dentist</h3><br />
      <Link to={"/detail/" + dentist.id}>
        <img className="doctor-img" src={dentista} alt="" />
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
