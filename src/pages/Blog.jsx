import React from "react";
import Header from "../Shared/Header";
import Footer from "./Home/Footer";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Header></Header>

      <h1 className="text-center"> FAQ</h1>
   <div className="container">
   <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Differences between uncontrolled and controlled components?</Accordion.Header>
        <Accordion.Body>
        Uncontrolled components are those that manage their own state and behavior independently of other components, while controlled components are managed by a parent component through props and callbacks. Controlled components provide a more predictable and consistent user interface, while uncontrolled components offer more flexibility but can be harder to manage.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How to validate React props using PropTypes?</Accordion.Header>
        <Accordion.Body>
          
To validate React props using PropTypes, import the PropTypes library from the 'prop-types' package, define a propTypes object in the component, and assign the expected data type to each prop. For example, PropTypes.string for a string prop. This will throw an error if the passed prop doesn't match the expected data type.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> the difference between nodejs and express js.</Accordion.Header>
        <Accordion.Body>
        Node.js is a runtime environment that allows JavaScript to be executed outside of a web browser, while Express.js is a web application framework built on top of Node.js. Express.js simplifies the process of building web applications by providing features like routing, middleware, and HTTP utility methods.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
        <Accordion.Body>
        A custom hook is a reusable function in React that contains stateful logic that can be shared among components. Custom hooks are created to extract repeated logic from components and promote code reuse. They are useful for encapsulating complex functionality into a single function that can be reused across multiple components.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   </div>

      <Footer></Footer>
    </div>
  );
};

export default Blog;
