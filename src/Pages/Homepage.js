import React from "react";
import Header from "../Components/Header/Header";
import Hero from "../Sections/Hero/Hero";
import Carousel from "../Sections/Carousel/Carousel";
import Card from "../Sections/Card/Card";
import Section from "../Sections/Section/Section";
import Accordion from "../Sections/Accordion/Accordion";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Carousel />
      <Card />
      <Section />
      <Accordion />
    </>
  );
};

export default Homepage;
