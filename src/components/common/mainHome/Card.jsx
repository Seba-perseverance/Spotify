import "./Card.css"

const Card = ({title,subtitle}) =>{
    return(
        <div className="Card">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}
export default Card;