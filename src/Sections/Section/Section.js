import React from "react";
import Container from "../../Components/Container/Container";
import {
  Wrapper,
  SectionLists,
  SectionItem,
  CardTitle,
} from "./Section.styled";

const Section = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <h1>Section</h1>
          <SectionLists>
            <SectionItem>
              <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" />
              <CardTitle>
                <h2>Card Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{" "}
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
                  dolore eu fugiat nulla pariatur.{" "}
                </p>
              </CardTitle>
              <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" />
            </SectionItem>
          </SectionLists>
        </Wrapper>
      </Container>
    </>
  );
};

export default Section;
