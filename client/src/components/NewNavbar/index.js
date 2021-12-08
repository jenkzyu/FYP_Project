import React from "react";

import {
  Nav,
  NavbarContainer,
  NavBtnLink,
  NavItem,
  NavLogo,
  NavMenu,
} from "./NewNavElements";

const NewNavbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Formula1</NavLogo>
          <NavMenu>
            <NavItem>
              <NavBtnLink to="signin">Sign in</NavBtnLink>
            </NavItem>
            <NavItem>
              <NavBtnLink to="signup">Register</NavBtnLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NewNavbar;
