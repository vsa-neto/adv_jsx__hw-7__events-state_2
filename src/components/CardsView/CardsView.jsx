import CardItem from "../CardItem/CardItem";
import "./css/CardsView.css";

export default function CardsView(props) {
    const { cards } = props;
    return (
        <div className="cards__wrp">
            {cards.map(card => <CardItem card={card} />)}
         </div >
    )

}