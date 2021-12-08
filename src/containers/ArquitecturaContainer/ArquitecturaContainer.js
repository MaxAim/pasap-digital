import "./ArquitecturaContainer.css";
import ArquitecturaPointers from "../../components/ArquitecturaPointers/ArquitecturaPointers";
import bcdiagrama from "../../img/bcdiagrama.png"

const ArquitecturaContainer = () => {
    return (
        <div className="arquitecturaContainer">
            <div>
                <h1>Arquitectura Privada en Blockchain</h1>
                <p>Trabajamos con tecnología Hyperledger Fabric respaldadas por IBM y Linux Foundation</p>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div className="arquitecturaPointersContainer">
                  <ArquitecturaPointers text={"Desarrollamos blockchain privadas que te garantizan el acceso a la información de acuerdo al perfil del usuario"} />  
                  <ArquitecturaPointers text={"Se crean diferentes canales de comunicación y acceso a los datos para que los diferentes integrantes de la red puedan negociar de acuerdo a sus comodidades"} />  
                  <ArquitecturaPointers text={"Aseguramos la transparencia de las actividades comerciales en cualquier industria."} />  
                  <ArquitecturaPointers text={"Se eliminan fricciones de la información es todos los aspectos:"} list1={"Información consistente y accesible para los integrantes de la red"} list2={"Información segura evitando el acceso de ciberdelincuentes y asegurando la privacidad de la información"} />  
                </div>
                <img src={bcdiagrama} alt="" />
            </div>
        </div>
    )
}

export default ArquitecturaContainer