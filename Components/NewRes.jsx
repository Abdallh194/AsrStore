import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ResImg from "../public/new.png";
function NewRes() {
  return (
    <div className="NewRes">
      <Container>
        <Row>
          <Col md={6} sm={6} className="img_box">
            <Image src={ResImg} alt="new Resturant Img" className="img-fluid" />
          </Col>
          <Col md={6} sm={6} className="text_box">
            <div className="head">New restaurant</div>
            <div className="desc">
              We are pleased to inform you that we have opened a new branch for
              food called Karshi
            </div>
            <div className="more">Read More</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewRes;
