
import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook,FaInstagram,FaYoutube} from "react-icons/fa";



const Footer = () => {
    return (
        <div>
   

     <div className='p-5 text-bg-light'>

        <Row>
          <Col>
            <strong>About Us</strong>
            <p>More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously side crudey mightily rigorous plot life. New homes in particular are subject.All recipes created with Next Chep</p>
          </Col>
          <Col>
            <strong>Links</strong> <br />
            <Link className='text-decoration-none text-info' href="#">Home</Link> <br />
            <Link className='text-decoration-none text-info' href="#">Blog</Link> <br />
            <Link className='text-decoration-none text-info' href="#">About Us</Link> <br />
            <Link className='text-decoration-none text-info' href="#">Contact us</Link> <br />
          </Col>
          <Col>
            <strong>Contact Us</strong> <br />
              <p>Texazs,USA <br /> House No 4390 1 </p> 
            
          </Col>
          <Col>
            <strong>Social Media</strong><br />
            <Link href="#">
              <i className="fab fa-facebook-f ">
                <span style={{ marginLeft: "10px" }}>
                 <FaFacebook style={{fontSize:'30px'}} ></FaFacebook> 
                </span>
              </i>
            </Link> 
            <Link href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                 <FaInstagram style={{fontSize:'30px'}}></FaInstagram>
                </span>
              </i>
            </Link> 
            <Link href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                 <FaYoutube style={{fontSize:'30px'}}></FaYoutube>
                </span>
              </i>
            </Link>
           
          </Col>
        </Row>
     
     </div>
  
        </div>
    );
};

export default Footer;