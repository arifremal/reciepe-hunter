import React, { useContext } from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Form, Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            {" "}
            <strong>Next</strong> Chef{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger text-decoration-none ps-2"
                    : "text-decoration-none ps-2"
                }
              >
                Home
              </NavLink>
              {/* <Link className="text-decoration-none ps-2" to={"/blog" }>BLOG</Link> */}
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-danger text-decoration-none ps-2"
                    : "text-decoration-none ps-2"
                }
              >
                Blog
              </NavLink>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link>
                  {/* <FaUserCircle style={{fontSize:'2rem'}} ></FaUserCircle> */}
                  <img
                    style={{ height: "40px" }}
                    className="rounded-circle"
                    src={user.photoURL}
                    alt=""
                  />
                </Nav.Link>
              )}
            </Nav>
            {user ? (
              <Button onClick={handleLogOut} variant="outline-primary">
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="outline-primary">Login</Button>
              </Link>
            )}
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
