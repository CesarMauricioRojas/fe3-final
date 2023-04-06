import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.name.length > 5 && validateEmail(user.email)) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
  

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          className="name fadeInLeft"
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />
        <label>Email</label>
        <input
          type="text"
          className="email fadeInLeft"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        <button className="btn fadeInLeft">Enviar</button>
        {err && (
          <h3 className="advertencia fadeInLeft">
            Por favor chequea que la información sea correcta
          </h3>
        )}
      </form>
      {show && (
        <h3 className="correcto fadeInLeft">
          Gracias {user.name} te contactaremos cuando antes vía mail
        </h3>
      )}
    </div>
  );
};

export default Form;
