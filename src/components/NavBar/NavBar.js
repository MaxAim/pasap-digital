import React, {useState, useEffect} from "react";
import "./NavBar.css";
import logo from "../../img/pasap-digital.png";

const NavBar = ({loaded}) => {
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
    <header className={scrollState} style={{display: loaded && "flex"}}>
      <div className={"mainIcon"} onClick={() => window.location.replace("/#")}>
        <img src={logo} alt={"Pasaporte Sanitario"} />
      </div>
      <span className={"links"}>
        <div className={"NavLink"} onClick={() => window.location.replace("/#salud")}>
          SALUD
        </div>
        <div className={"NavLink"} onClick={() => window.location.replace("/#tecnologia")}>
          TECNOLOGÍA
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
