import React from 'react';
import {NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

class Navigation extends React.Component {

  render() {
    return (
        <Navbar bg="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
              <NavLink className="d-inline p-2 bg-dark text-white" to="/stats">Stats Table</NavLink>
              <NavLink className="d-inline p-2 bg-dark text-white" to="/chart">Chart</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
export default Navigation;