import ListItem from "../ListItem/ListItem";
import "./css/ListView.css";

export default function ListView(props) {
    const { cards } = props;
    return (
        <div className="list__wrp">
            {cards.map(card => <ListItem item={card} />)}
         </div >
    )

}