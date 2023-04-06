import React from "react";
import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="fadeIn">
      <div className="title-contact">
        <h2 style={{fontSize: "50px"}}>Want to know more?</h2><br />
        <p style={{fontSize: "15px"}}>Send us your questions and we will contact you</p>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
