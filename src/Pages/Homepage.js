import React from "react";
import Hero from "../Sections/Hero/Hero";
import Carousel from "../Sections/Carousel/Carousel";
import Card from "../Sections/Card/Card";
import Section from "../Sections/Section/Section";
import Accordion from "../Sections/Accordion/Accordion";
import Forms from "../Sections/Form/Form";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <Card />
      <Section />
      <Accordion />
      <Forms />
    </>
  );
};

export default Homepage;
