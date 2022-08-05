import React from "react";
import "./Card.css";
import divider from '../assets/images/pattern-divider-desktop.svg';
import dice from '../assets/images/icon-dice.svg';

function Card(props) {
  return (
    <div className="container">
      <div className="container--card">
        <h1 className="container--card-h1">Advice  #{props.id}</h1>
        <p className="container--card-p">"{props.advice}"</p>
      </div>
      <img src={divider} alt="divider" className="divider" />
      <div class="dice-container" onClick={props.toggleChange}>
      <img src={dice} alt="dice button" className="dice" />
      </div>
    </div>
  );
}

export default Card;
