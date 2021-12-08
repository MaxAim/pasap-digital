import React, {useState, useEffect} from "react";
import "./NavBar.css";
import logoPasap from "../../img/pasap-digital.png";
import logoBlock from "../../img/blockchainAR.png"
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = ({pasap}) => {
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


  if(pasap){
    return (
      <header className={scrollState}>
        <div className={"mainIcon"} onClick={() => window.location.replace("#")}>
          <img src={logoPasap} alt={"Pasaporte Sanitario"} />
        </div>
        <span className={"links"}>
          <div className={"NavLink"} onClick={() => window.location.replace("#salud")}>
            SALUD
          </div>
          <div className={"NavLink"} onClick={() => window.location.replace("#tecnologia")}>
            TECNOLOGÍA
          </div>
          <div className={"NavLink"} onClick={() => window.location.replace("#nosotras")}>
            QUIENES SOMOS
          </div>
          <div className={"NavLink"} onClick={() => window.location.replace("#contacto")}>
            CONTACTO
          </div>
        </span>
      </header>
    );
  }

    return (
      <header className="blockNavBar">
      <Link to="/pasap-digital/#" >
        <img src={logoBlock} alt={"BlockChainAR"} />
      </Link>
      <span className={"links"}>
        <Link className={"NavLink"} to="/pasap-digital/#" >
          TECNOLOGÍA
        </Link>
        <Link className={"NavLink"} to="/pasap-digital/#productos">
          PRODUCTOS
        </Link>
        <Link className={"NavLink"} to="/pasap-digital/#nosotras">
          QUIENES SOMOS
        </Link>
        <Link className={"NavLink"} to="/pasap-digital/#contacto">
          CONTACTO
        </Link>
      </span>
    </header>
  );
};

export default NavBar;
