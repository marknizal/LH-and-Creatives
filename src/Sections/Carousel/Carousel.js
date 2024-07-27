import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import image1 from "../../Assets/Images/carousel-1.png";
import image2 from "../../Assets/Images/carousel-2.png";
import image3 from "../../Assets/Images/carousel-3.png";
import image4 from "../../Assets/Images/carousel-4.png";
import image5 from "../../Assets/Images/carousel-5.png";
import image6 from "../../Assets/Images/carousel-6.png";

import image7 from "../../Assets/Images/carousel-arrow-1.png";
import image8 from "../../Assets/Images/carousel-arrow-2.png";

import {
  Title,
  CarouselContainer,
  CarouselInner,
  CarouselImage,
  Button,
} from "./Carousel.styled";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3, image4, image5, image6];
  const duplicatedImages = [...images, ...images, ...images];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? duplicatedImages.length / 3 - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === duplicatedImages.length / 3 - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Container>
        <Title>Carousel</Title>
      </Container>
      <CarouselContainer>
        <CarouselInner
          style={{
            transform: `translateX(-${(currentIndex + images.length) * 300}px)`,
          }}
        >
          {duplicatedImages.map((src, index) => (
            <CarouselImage
              key={index}
              src={src}
              alt={`carousel-image-${index}`}
            />
          ))}
        </CarouselInner>
        <Button left onClick={handlePrevClick}>
          <img src={image7} alt="prev" />
        </Button>
        <Button onClick={handleNextClick}>
          <img src={image8} alt="next" />
        </Button>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
