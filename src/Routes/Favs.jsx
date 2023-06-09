import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {

  const { theme} = useContext(ContextGlobal);
  
  const favs = localStorage.getItem('favs')
  let parsedFavs = JSON.parse(favs) || []
  return (
    <div className={`${theme} fadeIn`}>
      <br />
      <h1>Dentists Favs</h1>
      <br /><br />
      <div className="card-grid zoomIn">
        {parsedFavs.map((dentist) => (<Card key={dentist.id} dentist={dentist} />))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
