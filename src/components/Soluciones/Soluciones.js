import "./Soluciones.css"

const Soluciones = ({img, text, title}) => {
    return (
        <div className="soluciones">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Soluciones