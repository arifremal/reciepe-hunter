import React, { useEffect, useState } from "react";

import {
  Button,
  Card,
  CardGroup,
  Carousel,
  ListGroup,
  Table,
} from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header";
import Footer from "./Footer";
import LazyLoad from "react-lazy-load";

const Home = () => {
  const [chef, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://next-chef-server-arifremal.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div>
      <Header></Header>

      {/* slider start */}

      <Carousel className="">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/nnMpv3T/johnathan-macedo-4-NQEvx-W2-4w-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>COOKING CLASSES FROM NEXT CHEF</h3>
            <p>
              Learn to cook from award-winning chefs like Connor Walker and Max
              Taylor.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/S7RNfys/pylyp-sukhenko-y-XZf-TNRms-unsplash.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>DOWNLOAD NEXT CHEF APP</h3>
            <p>
              Take out a free 30-day trial to see for yourself, or browse our
              unlocked recipes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/5xh1ZJr/sebastian-coman-photography-c-Qb-OSRp-Elxw-unsplash.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>START YOUR 30-DAY DIGITAL ACCESS TRIAL</h3>
            <p>Try all of Good Food’s features with our 30-days free trial.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 className="text-center py-4">
        Our Latest{" "}
        <strong className="text-bg-info mt-3 p-1 rounded text-white ">
          CHEF'S
        </strong>
      </h1>

      <LazyLoad offset={300} threshold={0.95} once>
        <div className=" d-flex flex-wrap justify-content-center p-2 text-bg-light ">
          {chef.map((chef) => (
            <div className="p-3">
              <Card style={{ width: "18rem" }}>
                <LazyLoad threshold={0.95} offset={300} once>
                  <Card.Img
                    className="img-fluid"
                    variant="top"
                    src={chef.image_url}
                  />
                </LazyLoad>
                <Card.Body>
                  <Card.Title>{chef.name}</Card.Title>
                  <Card.Text>
                    <p>
                      Years of <strong>Experience</strong>{" "}
                      {chef.years_of_experience}
                    </p>
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Numbers of <strong>recipes</strong> {chef.num_recipes}{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>Likes {chef.likes}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Link to={`chef/${chef.id}`}>
                    <Button className="text-bg-info fs-5 fw-normal border border-0   text-white ">
                      View Recipes
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}{" "}
        </div>
      </LazyLoad>
      <div className="container">
        <h1 className="text-center py-4">
          Contact our{" "}
          <strong className="text-bg-info mt-3 p-1 rounded text-white ">
            CHEF'S
          </strong>
        </h1>
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
              <td>Luke</td>
              <td>luke@nextchef.com</td>
              <td>461-632-5162</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="container">
        <h1 className="text-center py-4">
          Don't Miss! latest{" "}
          <strong className="text-bg-info mt-3 p-1 rounded text-white ">
            POST'S
          </strong>
        </h1>

        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="../../../public/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg"
            />
            <Card.Body>
              <Card.Title>chicken & pomegranate salad</Card.Title>
              <Card.Text>
                chicken & pomegranate salad quamquam voluptatibus quibusdam est
                saepe iucundius, tamen expetitur propter voluptatem.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="../../../public/pylyp-sukhenko-y-XZf_TNRms-unsplash.jpg"
            />
            <Card.Body>
              <Card.Title>Classic Hamburger</Card.Title>
              <Card.Text>
                Classic Hamburger unum est sine dolore esse, alterum cum
                voluptate lemon cake. Voluptatibus quibusdam est saepe
                iucundius, tamen expetitur propter voluptatem. Quae enim adhuc
                protulisti.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="../../../public/sebastian-coman-photography-cQbOSRpElxw-unsplash.jpg"
            />
            <Card.Body>
              <Card.Title>Chicken breast steak with broccoli
</Card.Title>
              <Card.Text>
                TChicken breast steak with broccoli unum est sine dolore esse, alterum cum voluptate lemon cake.
Voluptatibus quibusdam est saepe iucundius, tamen expetitur propter voluptatem.
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
