import styled from "styled-components";
import BREAKPOINTS from "../../Themes/Breakpoints";

export const Wrapper = styled.div`
  background-color: #FFF000;
  padding: 18px;
  text-align: center;
  align-items: center;

  p {
    margin: 0;
  }

  ${BREAKPOINTS.MOBILE} {
    padding: 24px 18px;
  }
`;