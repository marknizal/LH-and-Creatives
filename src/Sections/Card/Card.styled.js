import styled from "styled-components";
import BREAKPOINTS from "../../Themes/Breakpoints";

export const Wrapper = styled.div`
  padding: 0 20px;
  h3 {
    margin-bottom: 18px;
  }
`;

export const CardLists = styled.div`
  align-items: center;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  ${BREAKPOINTS.DESKTOP} {
    grid-template-columns: repeat(4);
  }
  ${BREAKPOINTS.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${BREAKPOINTS.MOBILE} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MoreCardLists = styled.div`
  align-items: center;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  ${BREAKPOINTS.DESKTOP} {
    grid-template-columns: repeat(3);
  }

  ${BREAKPOINTS.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 20px;

  img {
    width: 100%;
  }
  h3,
  p {
    margin: 0;
  }

  ${BREAKPOINTS.MOBILE} {
    width: 100%;
  }
`;
