import React from "react";
import "./CardListWithBorders.css";
import CardDuties from "../CardDuties/CardDuties";

let cards = [
  {
    image: require("../../main_assets/images/development.svg"),
    title: "Prototyping",
    description:
      "Lorem ipsum Consequuntur dolor autem explicabo totam sit voluptates rerum exercitationem ad cum?"
  },
  {
    image: require("../../main_assets/images/development.svg"),
    title: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequunturrum exercitationem ad cum?"
  },
  {
    image: require("../../main_assets/images/development.svg"),
    title: "Development",
    description:
      "Consequuntur dolor autem explicus dolor expedita ex labore quos ipsam perferendis itaque fugit."
  },
  {
    image: require("../../main_assets/images/development.svg"),
    title: "Strategy",
    description:
      "Lorem ipsum dolor sit amet rerum exercitationem ad cum? Faciliabore quos ipsam perferendis itaque fugit."
  },
  {
    image: require("../../main_assets/images/development.svg"),
    title: "Analytic",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ad cum?ore quos ipsam perferendis itaque fugit."
  },
  {
    image: require("../../main_assets/images/development.svg"),
    title: "Testing",
    description:
      "Lorem ipsum dolor sit rerum exercitationem quos ipsam perferendis itaque fugit."
  }
];
const cardListWithBorders = props => (
  <div className="cards">
    {cards.map(card => (
      <div className="cardsInner" key={card.title} id={card.title}>
        <CardDuties {...card} />
      </div>
    ))}
  </div>
);

export default cardListWithBorders;
