import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Most_01_Img from "../public/most_01.jpg";
import Most_02_Img from "../public/most_02.jpg";
import Most_03_Img from "../public/most_03.jpg";
import Most_04_Img from "../public/most_04.jpg";
import Mixer_01_Img from "../public/Mixer_01.png";
import Mixer_02_Img from "../public/Mixer_02.png";
import Image from "next/image";
function Featured() {
  return (
    <div className="Featured">
      <Container>
        <div className="Featured_Prod">
          <div className="head">Best selling products</div>
          <Row>
            <Col sm={3} md={3} className="Featured_Box">
              <Image
                src={Most_01_Img}
                alt={Most_01_Img}
                className="img-fluid"
              />
              <div className="head">Mackup</div>
            </Col>
            <Col sm={3} md={3} className="Featured_Box">
              <Image
                src={Most_02_Img}
                alt={Most_02_Img}
                className="img-fluid"
              />
              <div className="head">agricultural tools</div>
            </Col>
            <Col sm={3} md={3} className="Featured_Box">
              <Image
                src={Most_03_Img}
                alt={Most_03_Img}
                className="img-fluid"
              />
              <div className="head">Toys</div>
            </Col>
            <Col sm={3} md={3} className="Featured_Box">
              <Image
                src={Most_04_Img}
                alt={Most_04_Img}
                className="img-fluid"
              />
              <div className="head">Electric Machines</div>
            </Col>
          </Row>
        </div>
        <Row className="mixer">
          <Col sm={12} md={3} className="Mixer_Box_01">
            <Image
              src={Mixer_01_Img}
              alt={Mixer_01_Img}
              className="img-fluid"
            />
          </Col>
          <Col sm={12} md={3} className="Mixer_Box_02">
            <Image
              src={Mixer_02_Img}
              alt={Mixer_02_Img}
              className="img-fluid"
            />
          </Col>
          <Col sm={12} md={6} className="Mixer_Box_Text">
            <div className="head">Magic Blender Offers</div>
            <div className="price">300$</div>
            <div className="desc">
              For blending, pureeing, or dissolving food and other substances.
              The mixer consists of a mixing bowl at the bottom of which is a
              rotating metal blade, which is driven by an electric motor in its
              base
            </div>
            <div className="add">Add To Cart</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Featured;
