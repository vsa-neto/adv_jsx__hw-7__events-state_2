
import "./css/IconSwitch.css";

export default function IconSwitch(props){
    const {isOn, onClick} = props;
    return (
      <div className="isOn" onClick={onClick}>
{ isOn ? <img className="icon" src="./card_icon.png"/> : <img className="icon" src="./list_icon.png" />}
      </div>
    )

}