import React, { useState } from "react";

function DieRoller(props) {
  const [numberOfDice, setNumberOfDice] = useState();
  const [sumOfdice, setSumOfDice] = useState(0);
  function handleChange(num) {
    num > 0 && setNumberOfDice(num);
  }
  function handleClick() {
    let sumOfdice = 0;
    for (let i = 1; i <= numberOfDice; i++) {
      sumOfdice += Math.floor(Math.random() * props.diceFaces) + 1;
    }
    setSumOfDice(sumOfdice);
  }
  return (
    <div className="dice-child">
      <input type="text" onChange={(e) => handleChange(e.target.value)}></input>
      <span>d{props.diceFaces}</span>
      <span>=</span>
      <span className="underlign">{sumOfdice}</span>
      <button className="btn btn-primary" onClick={handleClick}>
        Roll!
      </button>
    </div>
  );
}

export default DieRoller;
