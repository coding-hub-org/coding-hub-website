import React from "react";
import "./Card.css";

const card = props => {
  const squareStyle = {
    backgroundColor: props.color,
  };

  const linkStyle = {
    color: props.color
  }
  
  return(
    <div className="card">
        <span style={squareStyle} className="card-square"></span>
        <div className="cardTitle">
        <h2><span>0{props.number+ 1}</span> {props.title}</h2>
        </div>
        <a style={linkStyle} href="/">More +</a> 
    </div>
  );
}

export default card;
