import React, {useState, useEffect} from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import logo from "../../img/pasap-digital.png";

const NavBar = () => {
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        if (scrollState !== "small") {
          setScrollState("small")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])


  return (
    <header className={scrollState}>
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
