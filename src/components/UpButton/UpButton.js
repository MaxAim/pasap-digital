import "./UpButton.css";
import upbutton from "../../img/upbutton.png";

const UpButton = () => {
    return(
        <button className="upButton" onClick={() => window.location.replace("#")}><img src={upbutton} /></button>
    )
}

export default UpButton