import React from "react";
import { Wrapper, HeroWrapper } from "./Hero.styled";

const Hero = () => {
  return (
    <>
      <Wrapper>
        <HeroWrapper>
          <h1>Hero Text</h1>
          <h2>Sub Hero Text Sentence</h2>
        </HeroWrapper>
      </Wrapper>
    </>
  );
};

export default Hero;
