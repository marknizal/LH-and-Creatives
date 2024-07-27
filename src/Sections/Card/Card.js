import React from "react";
import Container from "../../Components/Container/Container";
import MoreCards from "./MoreCards";

import image1 from "../../Assets/Images/card-4col-1.png";
import image2 from "../../Assets/Images/card-4col-2.png";
import image3 from "../../Assets/Images/card-4col-3.png";
import image4 from "../../Assets/Images/card-4col-4.png";

import { Wrapper, CardLists, CardItem } from "./Card.styled";

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
  {
    id: 4,
    imgSrc: image4,
    title: "Card Title 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const Card = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <h1>Card</h1>
          <h3>4 column card on PC</h3>
          <CardLists>
            {cardData.map(({ id, imgSrc, title, description }) => (
              <a key={id} href={`/card/${id}`}>
                <CardItem>
                  <img src={imgSrc} alt={title} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </CardItem>
              </a>
            ))}
          </CardLists>
          <MoreCards />
        </Wrapper>
      </Container>
    </>
  );
};

export default Card;
