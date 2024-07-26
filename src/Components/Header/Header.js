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

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#home", label: "About" },
    { href: "#about", label: "Service" },
    { href: "#services", label: "Access" },
    { href: "#portfolio", label: "Recruit" },
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
            </NavLink>
          ))}
          <ContactButton>Contact</ContactButton>
        </NavbarItems>
      </Leftside>
      <MenuToggle onClick={toggleMenu}>{isMenuOpen ? "✖" : "☰"}</MenuToggle>
    </HeaderWrapper>
  );
};

export default NavBar;
