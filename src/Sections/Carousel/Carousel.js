import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import {
  Title,
  CarouselContainer,
  CarouselInner,
  CarouselImage,
  PrevButton,
  NextButton,
} from "./Carousel.styled";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Container>
        <Title>Carousel</Title>
      </Container>
      <CarouselContainer>
        <CarouselInner
          style={{ transform: `translateX(-${currentIndex * 110}px)` }}
        >
          {images.map((src, index) => (
            <CarouselImage
              key={index}
              src={src}
              alt={`carousel-image-${index}`}
            />
          ))}
        </CarouselInner>
        <PrevButton onClick={handlePrevClick}>&lt;</PrevButton>
        <NextButton onClick={handleNextClick}>&gt;</NextButton>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
