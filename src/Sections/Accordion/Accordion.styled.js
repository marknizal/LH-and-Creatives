import styled from "styled-components";
import BREAKPOINTS from "../../Themes/Breakpoints";

export const Wrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px 0;

  ${BREAKPOINTS.MOBILE} {
    padding: 0 20px;
  }
`;

export const AccordionHeader = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #e0e0e0;
  }
`;

export const AccordionContent = styled.div`
  padding: 15px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  border-top: 1px solid #ccc;
`;

export const AccordionIcon = styled.span`
  font-size: 12px;
`;

export const Title = styled.h1`
  ${BREAKPOINTS.MOBILE} {
    padding: 0 20px;
  }
`;
