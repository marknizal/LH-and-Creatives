import styled from "styled-components";
import BREAKPOINTS from "../../Themes/Breakpoints";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: yellow;
  padding: 8px 38px;

  ${BREAKPOINTS.MOBILE} {
    padding: 8px 24px;
  }
`;

export const Leftside = styled.div`
  display: flex;
  gap: 68px;
  align-items: center;
  flex-grow: 1;
`;

export const Logo = styled.div`
  img {
    width: 110px;
  }
`;

export const NavbarItems = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  flex-grow: 1;

  ${BREAKPOINTS.MOBILE} {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 0;
    background: yellow;
    width: 100%;
    padding: 32px 0;
  }
`;

export const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const ContactButton = styled.button`
  background-color: red;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  padding: 10px 28px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: auto;

  ${BREAKPOINTS.MOBILE} {
    width: 90%;
    margin-left: 0;
  }
`;

export const MenuToggle = styled.div`
  cursor: pointer;
  display: none;
  margin-left: auto;

  ${BREAKPOINTS.MOBILE} {
    display: flex;
  }
`;
