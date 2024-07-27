import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  background-image: url("/HeroImg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

export const HeroWrapper = styled.div`
  text-align: center;

  h1,
  h2 {
    margin: 0;
  }

  h1 {
    font-size: 70px;
  }
`;
