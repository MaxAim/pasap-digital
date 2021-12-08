import "./ArquitecturaPointers.css"

const ArquitecturaPointers = ({text, list1, list2}) => {
    return(
        <div className="arquitecturaPointers">
            {text}
            <ul>
                <li style={{display: !list1 && "none"}}>{list1}</li>
                <li style={{display: !list2 && "none"}}>{list2}</li>
            </ul>
        </div>
    )
}

export default ArquitecturaPointers