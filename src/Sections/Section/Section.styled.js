import styled from "styled-components";
import BREAKPOINTS from "../../Themes/Breakpoints";

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const SectionLists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  img {
    width: 45%;

    ${BREAKPOINTS.MOBILE} {
      width: 100%;
    }
  }

  ${BREAKPOINTS.MOBILE} {
    flex-direction: column;
  }

  &:nth-child(2) {
    ${BREAKPOINTS.MOBILE} {
      flex-direction: column-reverse;
    }
  }
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
  }
`;
