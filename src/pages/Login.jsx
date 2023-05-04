import React, { useContext } from "react";
import Header from "../Shared/Header";
import Footer from "./Home/Footer";
import { Button, Container, Form, ListGroup } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const { signIn, googleSignIn,gitHubSignIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const handGoogle = () => {
    googleSignIn()
      .then((result) => {
        const goggleUser = result.user;
        // console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithub =()=>{
    gitHubSignIn()
    .then((result) => {
      const gitHubUser = result.user;
      // console.log(loggedUser);
      navigate(from, { replace: true });
    })
    .catch((error) => {
      console.log(error);
    });

  }

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    const password = form.password.value;

    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Header></Header>
      <Container className="mx-auto w-25 p-4">
        <h3>Please Login</h3>
        <Form onSubmit={handleLogIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>{" "}
          <br />
          <br />
          <Form.Text className="">
            Don't Have an Account ?<Link to={"/registration"}>Register</Link>
          </Form.Text>
          <Form.Text className="text-danger"></Form.Text>
          <Form.Text className="text-success"></Form.Text>
        </Form>
        <Button className="mb-2" onClick={handGoogle} variant="outline-primary">
          {" "}
          <FaGoogle /> Login with Google
        </Button>
        <Button onClick={handleGithub} variant="outline-secondary">
          {" "}
          <FaGithub></FaGithub> Login with Github
        </Button>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Login;
