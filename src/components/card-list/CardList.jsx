import React from "react";
import "./CardList.style.css";
import Card from "../card/Card";
const CardList = (props) => {
  //console.log(props);
  if (props.monsters.length === 0) {
    return <h1>No item Found</h1>;
  } else {
    return (
      <div className="card-list  ">
        {props.monsters.map((monster) => (
          <Card className="col-4" key={monster.id} monster={monster}></Card>
        ))}
      </div>
    );
  }
};

export default CardList;
