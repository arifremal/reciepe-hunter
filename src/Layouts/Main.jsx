import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header';
import Footer from '../pages/Home/Footer';
import { Button, Card, Carousel, ListGroup } from 'react-bootstrap';

const Main = () => {
    const [chef,setChefs] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=> res.json())
        .then(data => setChefs(data) )
    },[])
    return (
        <div>
            <Header></Header>

{/* slider start */}

<Carousel className=''>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="../../public/sebastian-coman-photography-cQbOSRpElxw-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="../../public/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../public/pylyp-sukhenko-y-XZf_TNRms-unsplash.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

<h1>Ches</h1>
<div className=' d-flex flex-wrap justify-content-center p-2 '>
{
    chef.map((chef=>(
        <div className='p-3'>
            <Card style={{ width: '18rem' }}>
        <Card.Img className='img-fluid' variant="top" src={chef.image_url} />
        <Card.Body>
          <Card.Title>{chef.name}</Card.Title>
          <Card.Text>
            <p>Years of <strong>Experience</strong> {chef.years_of_experience}</p>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Numbers of  <strong>recipes</strong> {chef.num_recipes} </ListGroup.Item>
          <ListGroup.Item>Likes {chef.likes}</ListGroup.Item>
          
        </ListGroup>
        <Card.Body>
          <Button className=''>View Recipes</Button>
        </Card.Body>
      </Card>
        </div>
    )))
} </div>           
           <Footer></Footer>
            
        </div>
    );
};

export default Main;