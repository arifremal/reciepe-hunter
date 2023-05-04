import React from 'react';
import Header from '../Shared/Header';
import Footer from './Home/Footer';
import { Button, Container,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
   <div>
    <Header></Header>
    <Container className='mx-auto w-25 p-4'>
        <h3>Please Login</h3>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required  />
        </Form.Group>
     
        <Button variant="primary" type="submit">
       Login
        </Button> <br />

        <Form.Text className="">
            Don't Have an Account ?
         <Link to={"/registration"}>Register</Link>
          </Form.Text>
        <Form.Text className="text-danger">
         
          </Form.Text>
        <Form.Text className="text-success">
         
          </Form.Text>
      </Form>
    </Container>
    <Footer></Footer>
   </div>
    );
};

export default Login;