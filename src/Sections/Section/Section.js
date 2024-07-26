import React from "react";
import Container from "../../Components/Container/Container";
import styled from "styled-components";
import BREAKPOINTS from "../../Themes/Breakpoints";

const Wrapper = styled.div`
  ${BREAKPOINTS.MOBILE} {
    padding: 0 20px;
  }
`;

const SectionLists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  img {
    width: 50%;

    ${BREAKPOINTS.MOBILE} {
      width: 100%;
    }
  }

  ${BREAKPOINTS.MOBILE} {
    flex-direction: column;
  }
`;
const CardTitle = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
  }
`;

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
