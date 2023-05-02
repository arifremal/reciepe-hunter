import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Form } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"> <strong>Next</strong> Chef </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
         
            </Nav>
            
              <Button variant="outline-primary">Login</Button>
              <Button className="mx-2" variant="primary">Registration</Button>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
