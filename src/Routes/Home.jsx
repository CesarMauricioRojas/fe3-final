import React, { useContext } from "react";
import Card from "../Components/Card";
import {
  ContextGlobal,
  useUserStates,
} from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  const { user } = useUserStates();
  const { theme, toggleTheme } = useContext(ContextGlobal);
  console.log(user);
  return (
    <main className={`${theme} fadeIn`}>
      <h1 className="zoomIn">Home</h1><br />
      <div className="card-grid zoomIn">
        {user.map((dentist) => (<Card key={dentist.id} dentist={dentist} />))}
      </div>

    </main>
  );
};

export default Home;
