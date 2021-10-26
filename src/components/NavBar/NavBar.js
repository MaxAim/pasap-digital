import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png"

const NavBar = () => {
  return (
    <header>
      <NavLink to={"/"} className={"mainIcon"} activeClassName={"off"}>
        <img src={logo} alt={"Pasaporte Sanitario"} />
      </NavLink>
      <span className={"links"}>
        <NavLink to={"/salud"} activeClassName={"off"} className={"NavLink"}>
          SALUD
        </NavLink>
        <NavLink to={"/tecnologia"} activeClassName={"off"} className={"NavLink"}>
          TECNOLOGÍA
        </NavLink>
        <NavLink to={"/nosotros"} activeClassName={"off"} className={"NavLink"}>
          QUIENES SOMOS
        </NavLink>
        <NavLink to={"/contacto"} activeClassName={"off"} className={"NavLink"}>
          CONTACTO
        </NavLink>
      </span>
    </header>
  );
};

export default NavBar;
