import React from "react";
import styled from "styled-components";
import BREAKPOINTS from "../../Themes/Breakpoints";

const Wrapper = styled.div`
  padding: 0;
`;

const CardLists = styled.div`
  align-items: center;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  ${BREAKPOINTS.DESKTOP} {
    grid-template-columns: repeat(3);
  }

  ${BREAKPOINTS.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 20px;

  img {
    width: 100%;
  }
  h3,
  p {
    margin: 0;
  }

  ${BREAKPOINTS.MOBILE} {
    width: 100%;
  }
`;

const cardData = [
  {
    id: 1,
    imgSrc:
      "https://burst.shopifycdn.com/photos/photo-of-a-cityscape-with-a-ferris-wheel.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    title: "Card Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    imgSrc:
      "https://burst.shopifycdn.com/photos/photo-of-a-cityscape-with-a-ferris-wheel.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    title: "Card Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    imgSrc:
      "https://burst.shopifycdn.com/photos/photo-of-a-cityscape-with-a-ferris-wheel.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    title: "Card Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const MoreCards = () => {
  return (
    <>
      <Wrapper>
        <h3>3 column card on PC</h3>
        <CardLists>
          {cardData.map(({ id, imgSrc, title, description }) => (
            <CardItem key={id}>
              <img src={imgSrc} alt={title} />
              <h3>{title}</h3>
              <p>{description}</p>
            </CardItem>
          ))}
        </CardLists>
      </Wrapper>
    </>
  );
};

export default MoreCards;
