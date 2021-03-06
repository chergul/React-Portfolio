import React from 'react';
import '../style.css';
import { GiBee } from 'react-icons/gi';
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

import {Link} from 'react-router-dom';

function MyNavbar (props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar className="myNav" color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/resume">Resume</NavLink>
            </NavItem>
          </Nav>
          <NavbarText><GiBee/>Happy!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}





export default MyNavbar;
