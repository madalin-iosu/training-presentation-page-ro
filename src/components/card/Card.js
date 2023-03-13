import { Link } from "react-router-dom";
import "./card.css";


const Card = (props) => {

    

    return (
        <div className="Card">
            {/* <div className="card-image"></div> */}
            <Link to={`/cursuri/${props.id}`}>
            <img className="CardImage" src={require(`../../images/cursuri-images/${props.img}`)} alt = {props.title} />

            <div className="CardContent">
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.description}
                </p>

            </div>
            <div className="CardDate">
                {props.date}
            </div>
            </Link>
        </div>    
    )
}

export default Card;