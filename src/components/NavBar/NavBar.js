import React, {useState, useEffect} from "react";
import "./NavBar.css";
import logoPasap from "../../img/pasap-digital.png";
import logoBlock from "../../img/blockchainAR.png"

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
        <div className={"mainIcon"} onClick={() => window.location.replace("/pasap/#")}>
          <img src={logoPasap} alt={"Pasaporte Sanitario"} />
        </div>
        <span className={"links"}>
          <div className={"NavLink"} onClick={() => window.location.replace("/pasap/#salud")}>
            SALUD
          </div>
          <div className={"NavLink"} onClick={() => window.location.replace("/pasap/#tecnologia")}>
            TECNOLOGÍA
          </div>
          <div className={"NavLink"} onClick={() => window.location.replace("/pasap/#nosotras")}>
            QUIENES SOMOS
          </div>
          <div className={"NavLink"} onClick={() => window.location.replace("/pasap/#contacto")}>
            CONTACTO
          </div>
        </span>
      </header>
    );
  }

    return (
      <header className="blockNavBar">
      <div className={"mainIcon"} onClick={() => window.location.replace("/#")}>
        <img src={logoBlock} alt={"BlockChainAR"} />
      </div>
      <span className={"links"}>
        <div className={"NavLink"} onClick={() => window.location.replace("/#")}>
          TECNOLOGÍA
        </div>
        <div className={"NavLink"} onClick={() => window.location.replace("/#productos")}>
          PRODUCTOS
        </div>
        <div className={"NavLink"} onClick={() => window.location.replace("/#nosotras")}>
          QUIENES SOMOS
        </div>
        <div className={"NavLink"} onClick={() => window.location.replace("/#contacto")}>
          CONTACTO
        </div>
      </span>
    </header>
  );
};

export default NavBar;
