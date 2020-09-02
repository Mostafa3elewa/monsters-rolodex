import React from "react";
import "./card.style.css";

const Card = (props) => {
  //console.log(props.id);
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2`}
        width="180"
        height="180"
        alt="monster"
      />
      <h2> {props.monster.name} </h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;
