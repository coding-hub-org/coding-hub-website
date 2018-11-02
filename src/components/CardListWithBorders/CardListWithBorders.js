import React from "react";
import "./CardListWithBorders.css";
import CardDuties from "../CardDuties/CardDuties";

let cards = [
  {
    id: 1,
    image: require("../../main_assets/images/prototyping.svg"),
    title: "Prototyping",
    description:
      "We help students prototype their app ideas or websites and customize it according to their needs."
  },
  {
    id: 2,
    image: require("../../main_assets/images/branding.svg"),
    title: "Branding",
    description:
      "We provide branding solutions by designing logos, company names, establishing web domains and many more."
  },
  {
    id: 3,
    image: require("../../main_assets/images/development.svg"),
    title: "Development",
    description:
      "We develop mobile and web applications of any scale giving students a platform to make their ideas into the next big thing."
  },
  {
    id: 4,
    image: require("../../main_assets/images/training.svg"),
    title: "Training",
    description:
      "Anyone is able to sign up for the club and attend meetings. We provide crash courses and learning resources for programming."
  },
  {
    id: 5,
    image: require("../../main_assets/images/analytic.svg"),
    title: "Analytic",
    description:
      "We include data analytics as part of most of our projects for research and development."
  },
  {
    id: 6,
    image: require("../../main_assets/images/testing.svg"),
    title: "Testing",
    description:
      "We provide software testing services and quality assurance for your websites and applications."
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
