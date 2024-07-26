import styled from "styled-components";
import BREAKPOINTS from "../../Themes/Breakpoints";

const ContainerWrapper = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 40px;
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
