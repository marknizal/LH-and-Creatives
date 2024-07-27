import React, { useState } from "react";
import {
  HeaderWrapper,
  Leftside,
  Logo,
  NavbarItems,
  NavLink,
  ContactButton,
  MenuToggle,
} from "./Header.styled";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import icon from "../../Assets/Images/recruit-icon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#service", label: "Service" },
    { href: "#access", label: "Access" },
    { href: "#recruit", label: "Recruit", icon: icon },
  ];

  return (
    <HeaderWrapper>
      <Leftside>
        <Logo>
          <img src="/logo.png" alt="logo" />
        </Logo>

        <NavbarItems isOpen={isMenuOpen}>
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.href}>
              {link.label}
              {link.icon && (
                <img src={link.icon} alt="icon" style={{ marginLeft: "8px" }} />
              )}
            </NavLink>
          ))}
          <ContactButton>Contact</ContactButton>
        </NavbarItems>
      </Leftside>
      <MenuToggle onClick={toggleMenu}>
        {isMenuOpen ? <IoMdClose /> : <MdMenu />}
      </MenuToggle>
    </HeaderWrapper>
  );
};

export default Header;
