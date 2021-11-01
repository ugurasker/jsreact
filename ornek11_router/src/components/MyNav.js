import React from "react";
import {Navbar,Nav,} from "react-bootstrap";
import logo from "../img/logo.png";
import {Link} from "react-router-dom";

function MyNav() {
  return (
    <div>
      <Navbar className="p-4" bg="light" variant="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/kurslar">Kurslar</Link></Nav.Link>
            <Nav.Link ><Link to="/kisiler">Kisiler</Link></Nav.Link>
            <Nav.Link ><Link to="/iletisim">Iletisim</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default MyNav;