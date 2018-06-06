import React from "react";
import './Nav.css';
import PropTypes from "prop-types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Navigation = props => {
  const navNames = props.tabs.map(tab => {
    return (
      <NavItem key={`${tab}`}>
        <NavLink href="#">{tab}</NavLink>
      </NavItem>
    );
  });

  return (
    <Navbar dark className="fixed-top" expand="lg" onClick={event => event.stopPropagation()}>
      <NavbarToggler onClick={props.toggle} />
      <Collapse isOpen={props.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {navNames}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

Navigation.propTypes = {
  tabs: PropTypes.array,
  toggle: PropTypes.func,
  isOpen: PropTypes.bool
}

export default Navigation;
