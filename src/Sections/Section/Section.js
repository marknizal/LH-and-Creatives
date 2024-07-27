import React from "react";
import Container from "../../Components/Container/Container";
import {
  Wrapper,
  SectionLists,
  SectionItem,
  CardTitle,
} from "./Section.styled";
import image1 from "../../Assets/Images/section-img1.png";
import image2 from "../../Assets/Images/section-img2.png";

const Section = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <h1>Section</h1>
          <SectionLists>
            <SectionItem>
              <img src={image1} alt="image1" />
              <CardTitle>
                <h2>Card Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </CardTitle>
            </SectionItem>
            <SectionItem>
              <CardTitle>
                <h2>Card Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </CardTitle>
              <img src={image2} alt="image2" />
            </SectionItem>
          </SectionLists>
        </Wrapper>
      </Container>
    </>
  );
};

export default Section;
