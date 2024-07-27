import styled from "styled-components";
import BREAKPOINTS from "../../Themes/Breakpoints";

export const Title = styled.h1`
  padding: 0 20px;
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

export const CarouselImage = styled.img`
  width: 300px;
  height: auto;
  margin: 0 5px;
`;

export const Button = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 80%;
  cursor: pointer;
  z-index: 1;

  img {
    width: 50px;
  }

  ${(props) => (props.left ? "left: 150px;" : "right: 150px;")}

  ${BREAKPOINTS.TABLET} {
    ${(props) => (props.left ? "left: 15px;" : "right: 15px;")}
  }
  ${BREAKPOINTS.MOBILE} {
    ${(props) => (props.left ? "left: 15px;" : "right: 15px;")}
  }
`;
