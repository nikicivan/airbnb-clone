import React from "react";
import "./card.css";

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.data.img} alt="" />
      <div className="card__info">
        <h2>{card.data.title}</h2>
        <h4>{card.data.description}</h4>
        <h3>{card.data.price}</h3>
      </div>
    </div>
  );
};

export default Card;
