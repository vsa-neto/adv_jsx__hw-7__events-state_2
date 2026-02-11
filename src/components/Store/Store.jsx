import { useState } from "react";
import IconSwitch from "../IconSwitch/IconSwitch";
import CardsView from "../CardsView/CardsView";
import ListView from "../ListView/ListView";
import "./css/Store.css";


const cards = [{
  name: "Nike Metcon 2",
  priсe: "130",
  color: "red",
  img: "./1.jpg"
}, {
  name: "Nike Metcon 2",
  priсe: "130",
  color: "green",
  img: "./2.jpg"
}, {
  name: "Nike Metcon 2",
  priсe: "130",
  color: "blue",
  img: "./3.jpg"
}, {
  name: "Nike Metcon 2",
  priсe: "130",
  color: "black",
  img: "./4.jpg"
}, {
  name: "Nike Metcon 3",
  priсe: "150",
  color: "green",
  img: "./5.jpg"
}, {
  name: "Nike Free run",
  priсe: "170",
  color: "black",
  img: "./6.jpg"
}
];


export default function Store() {
  const [state, setState] = useState({ isOn: true });

  const onToggle = () => {
    setState(prevState => ({
      isOn: !prevState.isOn
    }));
  }
  const isOn = state.isOn
  console.log(isOn);

  return (
    <>
      < IconSwitch isOn={state.isOn} onClick={onToggle} />
      <div className="catalog">
        {state.isOn ? < CardsView cards={cards} /> : < ListView cards={cards} />}
        {state.isOn ? console.log('CardsView') : console.log("ListView")}
      </div>
    </>
  )
}


