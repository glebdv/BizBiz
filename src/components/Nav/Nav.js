import React from "react";
import './Nav.css';
import PropTypes from "prop-types";
//reactstrap - the better alternative for React Bootstrap :)
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
      //create navbar tabs. key could be better
      <NavItem key={`${tab}`}>
        <NavLink href="#">{tab}</NavLink>
      </NavItem>
    );
  });

  return (
    //makes sure that if the user clicks on the navbar, that the backround app doesn't close the menu with propagation
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

//make sure that props are properly passed
Navigation.propTypes = {
  tabs: PropTypes.array,
  toggle: PropTypes.func,
  isOpen: PropTypes.bool
}

export default Navigation;
