import { useHistory } from "react-router-dom";
import "./Gracias.css"

const Gracias = () => {
    let history = useHistory();

    setTimeout(() => history.push("/"), 2000)

    return <div className="gracias">Gracias por tu consulta!</div>
}

export default Gracias