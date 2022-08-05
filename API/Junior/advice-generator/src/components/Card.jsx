import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <h1>Advice #{props.id}</h1>
      <p>{props.advice}</p>
    </div>
  )
}

export default Card