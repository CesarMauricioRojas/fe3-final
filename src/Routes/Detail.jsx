import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import dentista from "../img/doctor.jpg"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [user, setUser] = useState([]);
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  const { theme } = useContext(ContextGlobal);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);


  return (
    <div className={`${theme} user fadeIn`}>
      <div className={`${theme} card user-card`}>
        <h2>Detail Dentist id {user.id}</h2>
        <img className="doctor-img" src={dentista} alt="" />
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      </div>
    </div>
  );
};

export default Detail;
