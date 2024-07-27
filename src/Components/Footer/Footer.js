import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: yellow;
  padding: 18px;
  text-align: center;
  align-items: center;

  p {
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>Copyright &#169; LionHeart</p>
    </Wrapper>
  );
};

export default Footer;
