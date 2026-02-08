import "./css/ListItem.css";

export default function ListItem(props) {
    const { item } = props;
    return (
        <div className="item" key={item.name}>
            <img className="item__sku_img" src={item.img}></img>
            <h3 className="item__sku_name">{item.name.toUpperCase()}</h3>
            <p className="item__sku_color">{item.color}</p>
            <div className="item__sku_price">${item.priсe}</div>
            <button className="addition">ADD TO CARD</button>
        </div>
    )

}