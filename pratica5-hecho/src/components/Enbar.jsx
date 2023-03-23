import React from "react";
import { NavLink } from "react-router-dom";

const Enbar = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? "activo" : "noactivo")}
        to={"/contacto"}
      >
        {" "}
        Contacto
      </NavLink>
      {/* <h1>Contacto :</h1>

      <h3>E-mail : mecagoentuvida@hoho.com</h3>
      <br />
      <h3>Móvil : 696969696969</h3> */}
    </div>
  );
};

export default Enbar;
