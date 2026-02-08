
import "./css/IconSwitch.css";

export default function IconSwitch(props){
    const {isOn, onClick} = props;
    return (
      <div className="isOn" onClick={onClick}>
{ isOn ? <img className="icon" src="../../../public/card_icon.png"/> : <img className="icon" src="../../../public/list_icon.png" />}
      </div>
    )

}