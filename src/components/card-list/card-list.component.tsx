import Card from "../card/card.component";
import { Monster } from "../../App";
import "./card-list.styles.css";

type CardProps = {
    monsters: Monster[]
}

const CardList = ({ monsters }: CardProps ) => ( // pass in props as monsters inside parameters
    <div className="card-list">
        {monsters.map((monster) => {
            return <Card monster={monster}/>
        })}
    </div>
)

export default CardList;