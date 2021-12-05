import "./Productos.css"

const Productos = () => {
    return(
        <div className="productos" id="productos">
            <span>
                <h1>Productos</h1>
                <p>Blockchainar.com.ar es un emprendimiento de dos ingenieras con mucha experiencia profesional y académica en tecnología y mercado.</p>
                <p>Trabajaron tanto en la industria como en el sector público con perspectiva de género y conciliación familia-trabajo.</p>
            </span>
            <div>
                <div className="productosImg" id="vacations"><a href="/pasap" className="productosLinks">Pasaporte<br />Sanitario</a><a className="productosOpacity" href=""/><a className="productosOpacity" href="/pasap"/></div>
                <div className="productosImg" id="water"><a href="" className="productosLinks">H₂</a><a className="productosOpacity" href=""/></div>
                <div className="productosImg" id="wine"><a href="" className="productosLinks">Wine <br /> Track</a><a href=""></a><a className="productosOpacity" href=""/></div>
                <div className="productosImg" id="vet"><a href="" className="productosLinks">VET</a><a className="productosOpacity" href=""/></div>
            </div>
        </div>
    )
}

export default Productos