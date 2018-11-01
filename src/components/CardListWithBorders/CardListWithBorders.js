import React from "react";
import "./CardListWithBorders.css";
import CardDuties from "../CardDuties/CardDuties";

let cards = [
  {
    id: 1,
    image: require("../../main_assets/images/prototyping.svg"),
    title: "Prototyping",
    description:
      "Lorem ipsum Consequuntur dolor autem explicabo totam sit voluptates rerum exercitationem ad cum?"
  },
  {
    id: 2,
    image: require("../../main_assets/images/development.svg"),
    title: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequunturrum exercitationem ad cum?"
  },
  {
    id: 3,
    image: require("../../main_assets/images/development.svg"),
    title: "Development",
    description:
      "Consequuntur dolor autem explicus dolor expedita ex labore quos ipsam perferendis itaque fugit."
  },
  {
    id: 4,
    image: require("../../main_assets/images/development.svg"),
    title: "Training",
    description:
      "Lorem ipsum dolor sit amet rerum exercitationem ad cum? Faciliabore quos ipsam perferendis itaque fugit."
  },
  {
    id: 5,
    image: require("../../main_assets/images/analytic.svg"),
    title: "Analytic",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ad cum?ore quos ipsam perferendis itaque fugit."
  },
  {
    id: 6,
    image: require("../../main_assets/images/testing.svg"),
    title: "Testing",
    description:
      "Lorem ipsum dolor sit rerum exercitationem quos ipsam perferendis itaque fugit."
  }
];
const cardListWithBorders = props => (
  <div className="cards">
    {cards.map(card => (
      <div className="cardsInner" key={card.title} id={"card" + card.id}>
        <CardDuties {...card} />
      </div>
    ))}
  </div>
);

export default cardListWithBorders;
