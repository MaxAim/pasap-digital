import React from 'react'
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import salud from "../img/imagen1.png";
import "./pages.css";

export const ThirdPage = () => {
    return (
        <>
            <NavBar pasap={true} />
            <h1 className="saludInfantilh1">Salud infantil</h1>
            <section className="saludInfantil">
                <div className="parrafoInfo">
                    <p>80 millones de niños menores de un año corren el riesgo de contraer enfermedades infantiles
                        prevenibles
                        debido al retraso o interrupción de programas de inmunización en el contexto de la pandemia
                        COVID 19
                        Se estima que 19,7 millones de niños menores a un año no recibieron vacunas en 2019
                        Las epidemias y brotes de gripe provocan cada temporada hasta medio millón de muertes en todo el
                        mundo
                        Desde 2000, las vacunas contra el sarampión han evitado casi 15,6 millones de muertes.
                        Los niños que nacen pobres tienen casi el doble de probabilidades de morir antes de los cinco
                        años que
                        los de las familias más ricas.
                        Los hijos de madres que han recibido educación, incluso las madres con tan solo educación
                        primaria,
                        tienen más probabilidades de sobrevivir que los hijos de madres sin educación.
                    </p>
                    <p className="parrafo2">¿Qué puedo hacer para ayudar? Todos podemos empezar por promover y proteger
                        nuestra
                        propia salud y la de nuestro entorno, tomando decisiones bien informadas y vacunando a nuestros
                        hijos
                    </p>
                </div>
                <div className="imagenSalud">
                    <img src={salud} alt="" />
                </div>
            </section>
            <Footer />
        </>
    )
}
