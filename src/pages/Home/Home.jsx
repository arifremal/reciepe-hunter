import React, { useEffect, useState } from 'react';

import { Button, Card, CardGroup, Carousel, ListGroup, Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../../Shared/Header';
import Footer from './Footer';

const Home = () => {
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
          <Link to={`chef/${chef.id}`} ><Button >View Recipes</Button></Link>
        </Card.Body>
      </Card>
        </div>
    )))
} </div> 

<div className='container'>
    <h1 className='text-center'>Newest Chefs</h1>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>mark@nextchef.com</td>
          <td>561-632-5162</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>jacob@nextchef.com</td>
          <td>361-632-5162</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Luke</td>
          <td>luke@nextchef.com</td>
          <td>461-632-5162</td>
       
        </tr>
      </tbody>
    </Table>

</div>

<div className="container">
<h1 className='text-center'>Our Blogs</h1>

<CardGroup>
      <Card>
        <Card.Img variant="top" src="../../../public/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../../../public/pylyp-sukhenko-y-XZf_TNRms-unsplash.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../../../public/sebastian-coman-photography-cQbOSRpElxw-unsplash.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
</div>

           <Footer></Footer>
        </div>
    );
};

export default Home;