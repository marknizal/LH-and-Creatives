import styled from "styled-components";
import BREAKPOINTS from "../../Themes/Breakpoints";

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

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 20%;
  cursor: pointer;
  z-index: 1;

  &:focus {
    outline: none;
  }
`;

export const PrevButton = styled(Button)`
  left: 100px;

  ${BREAKPOINTS.MOBILE} {
    left: 20px;
  }
`;

export const NextButton = styled(Button)`
  right: 100px;

  ${BREAKPOINTS.MOBILE} {
    right: 20px;
  }
`;
