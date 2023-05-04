import React, { useContext } from 'react';
import Header from '../Shared/Header';
import Footer from './Home/Footer';
import { Button, Container,Form } from 'react-bootstrap';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Register = () => {
    const{createUser}= useContext(AuthContext)
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";
    // const navigate = useNavigate();
    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target;
        const name= form.name.value
        const email= form.email.value
        const password= form.password.value
        const photo= form.photo.value
        console.log(name,email,password,photo);
        createUser(email,password)
        .then(result=>{
            const createdUser = result.user
            console.log(createdUser);
            navigate('/');
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <Header></Header>
            <Container className='mx-auto w-25 p-4'>
        <h3>Please Register</h3>
    <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter your name" required />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Photo Url" required />
          
        </Form.Group>
   
        <Button variant="primary" type="submit">
          Register
        </Button> <br />

        <Form.Text className="">
            Already Have  an Account ?
         <Link to={"/login"}>Login</Link>
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

export default Register;