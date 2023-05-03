import React from "react";
import Header from "../Shared/Header";
import Footer from "../pages/Home/Footer";
import { useLoaderData } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";

import { Button, Card, CardGroup, ListGroup } from "react-bootstrap";

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
        <Card className="bg-dark text-white border border-white  w-50">
          <Card.Img
            className=""
            src={chef.chefs_info.image_url}
            alt="Card image"
          />
          <Card>
            <Card.Title className="text-success">
              {chef.chefs_info.name}
            </Card.Title>
            <Card.Text className="text-primary">
              {chef.chefs_info.bio}
            </Card.Text>
            <div className="d-flex justify-content-between text-danger p-2">
              <div>
                {" "}
                <strong> Likes:{chef.chefs_info.likes}</strong>{" "}
              </div>
              <div>
                {" "}
                <strong> Number of recipes:</strong>{" "}
                {chef.chefs_info.num_recipes}{" "}
              </div>
              <div>
                {" "}
                <strong> Years of experience</strong>{" "}
                {chef.chefs_info.years_of_experience}{" "}
              </div>
            </div>
          </Card>
        </Card>
      </div>
      <div className="container">
        <h3>Recipes</h3>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={chef.chefs_info.recipes[0].img} />
            <Card.Body>
              <Card.Title>{chef.chefs_info.recipes[0].name}</Card.Title>
              <ListGroup as="ol" numbered>
                <strong>Ingredients</strong>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[0].ingredients[0]}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[0].ingredients[1]}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[0].ingredients[2]}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[0].ingredients[3]}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[0].ingredients[4]}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <p>
                {" "}
                <strong>Cooking method: </strong>{" "}
                {chef.chefs_info.recipes[0].cooking_method}{" "}
              </p>
              <div className="d-flex justify-content-between ">
                <div>
                  <strong>Rating:{chef.chefs_info.recipes[0].rating}</strong>
                </div>
                <div>
                  <FaRegBookmark></FaRegBookmark>
                </div>
              </div>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={chef.chefs_info.recipes[0].img} />
            <Card.Body>
              <Card.Title>{chef.chefs_info.recipes[1].name}</Card.Title>
              <ListGroup as="ol" numbered>
                <strong>Ingredients</strong>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[1].ingredients[0]}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[1].ingredients[1]}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[1].ingredients[2]}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[1].ingredients[3]}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[1].ingredients[4]}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <p>
                {" "}
                <strong>Cooking method: </strong>{" "}
                {chef.chefs_info.recipes[1].cooking_method}{" "}
              </p>
              <div className="d-flex justify-content-between ">
                <div>
                  <strong>Rating:{chef.chefs_info.recipes[1].rating}</strong>
                </div>
                <div>
                  <FaRegBookmark></FaRegBookmark>
                </div>
              </div>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={chef.chefs_info.recipes[0].img} />
            <Card.Body>
              <Card.Title>{chef.chefs_info.recipes[2].name}</Card.Title>
              <ListGroup as="ol" numbered>
                <strong>Ingredients</strong>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[2].ingredients[0]}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[2].ingredients[1]}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[2].ingredients[2]}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[2].ingredients[3]}
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  {chef.chefs_info.recipes[2].ingredients[4]}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <p>
                {" "}
                <strong>Cooking method: </strong>{" "}
                {chef.chefs_info.recipes[2].cooking_method}{" "}
              </p>
              <div className="d-flex justify-content-between ">
                <div>
                  <strong>Rating:{chef.chefs_info.recipes[2].rating}</strong>
                </div>
                <div>
                  <FaRegBookmark></FaRegBookmark>
                </div>
              </div>
            </Card.Footer>
          </Card>
        
        </CardGroup>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ChefLayout;
