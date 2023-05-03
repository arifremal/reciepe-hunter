import React from "react";
import Header from "../Shared/Header";
import Footer from "../pages/Home/Footer";
import { useLoaderData } from "react-router-dom";
import { Card, CardGroup, ListGroup } from "react-bootstrap";

const ChefLayout = () => {
  const chef = useLoaderData();

  return (
    <div>
      <Header></Header>
      coming
      <div
        className="text-center d-flex justify-content-center align-items-center
"
      >
        <Card className="bg-dark text-white w-50">
          <Card.Img
            className=""
            src={chef.chefs_info.image_url}
            alt="Card image"
          />
          <Card>
            <Card.Title className="text-success">{chef.chefs_info.name}</Card.Title>
            <Card.Text className="text-primary">
            {chef.chefs_info.bio}
            </Card.Text>
            <Card.Text className="text-primary">Last updated 3 mins ago</Card.Text>
          </Card>
        </Card>
      </div>

      <div className="container">
        <h3>Recipes</h3>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src={chef.chefs_info.recipes[0].img}/>
        <Card.Body>
          <Card.Title>{chef.chefs_info.recipes[0].name}</Card.Title>
          <ListGroup as="ol" numbered>
          <strong>Ingredients</strong>
      <ListGroup.Item as="li">{chef.chefs_info.recipes[0].ingredients[0]}</ListGroup.Item>
      <ListGroup.Item as="li">{chef.chefs_info.recipes[0].ingredients[1]}</ListGroup.Item>
      <ListGroup.Item as="li">{chef.chefs_info.recipes[0].ingredients[2]}</ListGroup.Item>
      <ListGroup.Item as="li">{chef.chefs_info.recipes[0].ingredients[3]}</ListGroup.Item>
      <ListGroup.Item as="li">{chef.chefs_info.recipes[0].ingredients[4]}</ListGroup.Item>
    </ListGroup>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
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
        <Card.Img variant="top" src="holder.js/100px160" />
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

export default ChefLayout;
