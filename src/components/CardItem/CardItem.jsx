import "./css/CardItem.css";

export default function CardItem(props) {
    const { card } = props;
    return (
        <div className="card" key={card.name}>
            <h3 className="card__sku_name">{card.name.toUpperCase()}</h3>
            <p className="card__sku_color">{card.color}</p>
            <img className="card__sku_img" src={card.img}></img>
            <div className="card__sku_price">${card.priсe}</div>
            <button className="addition">ADD TO CARD</button>
        </div>
    )

}