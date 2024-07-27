import React from "react";
import { MoreCardLists, CardItem } from "./Card.styled";

import image1 from "../../Assets/Images/card-3col-1.png";
import image2 from "../../Assets/Images/card-3col-2.png";
import image3 from "../../Assets/Images/card-3col-3.png";

const cardData = [
  {
    id: 1,
    imgSrc: image1,
    title: "Card Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    imgSrc: image2,
    title: "Card Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    imgSrc: image3,
    title: "Card Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const MoreCards = () => {
  return (
    <>
      <h3>3 column card on PC</h3>
      <MoreCardLists>
        {cardData.map(({ id, imgSrc, title, description }) => (
          <CardItem key={id}>
            <img src={imgSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
          </CardItem>
        ))}
      </MoreCardLists>
    </>
  );
};

export default MoreCards;
