import React, { useContext } from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const {user}=  useContext(AuthContext)
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand > <strong>Next</strong> Chef </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="text-decoration-none " to={"/"}>HOME</Link>
              <Link className="text-decoration-none ps-2" to={"/blog"}>BLOG</Link>
              
         
            </Nav>
           <Nav>
           { user && <Nav.Link>
              <FaUserCircle style={{fontSize:'2rem'}} ></FaUserCircle>

            </Nav.Link>}
           </Nav>
             { user ? 
             <Button variant="outline-primary">Logout</Button>:
           <Link to='/login' >
             <Button variant="outline-primary">Login</Button>
           </Link>
            }
            {/* <Link to="registration">
            <Button className="mx-2" variant="primary">Registration</Button>
            </Link> */}
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
