import React from 'react';
import '../style.css';

//Import icons for social media
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

  function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return ( 
      <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h5>Designed and Developed by Ceyda H. Hergul</h5>
          <h6> ceyda_hergul@hotmail.com</h6>
        </Col>
        <Col md="4" className="footer-copyright">
          <h6>Copyright © {year} CHH</h6>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/chergul"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/chergul"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ceyda-hergul/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/chergull"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    );
  }
  
  export default Footer;
  
  
