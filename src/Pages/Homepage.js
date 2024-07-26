import React from "react";
import Header from "../Components/Header/Header";
import Hero from "../Sections/Hero/Hero";
import Carousel from "../Sections/Carousel/Carousel";
import Card from "../Sections/Card/Card";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Carousel />
      <Card />
    </>
  );
};

export default Homepage;
