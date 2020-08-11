import React from "react";
import { Row, Col, Image  } from "react-bootstrap";
import "./image.css";
import image from '../../assets/programming.svg';


export default function ImageBackgroud(props) {
    return (
    <header >
    <div className="overlay"></div>
      <Row>
        <Col lg={2}>
        </Col>
        <Col lg={3}>
          <Row>
            
          </Row>
          <div className="site-heading">
            <h1 className="title" >{props.topic}</h1>
          </div>
        </Col> 
        <Col lg={7} >
        <div>
          <Image src={image} className='image' />
        </div>
        </Col>
      </Row>
  </header>
    )
}