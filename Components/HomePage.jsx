import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home_01_Img from "../public/Home_01.png";
import Home_02_Img from "../public/Home_02.png";
import Home_03_Img from "../public/Home_03.png";
import Home_04_Img from "../public/Home_04.png";
const HomePage = () => {
  return (
    <div className="homepage">
      <Container>
        <Row>
          <Col sm={12} md={6} className="left_Box">
            <div className="d-flex">
              <Col sm={6} md={6} className="FullWidthMobileView">
                <h4>Black Friday Sales</h4>
                <div className="head">UP TO</div>
                <div className="discount">55% OFF</div>
                <Link href="#Products" className="ShopNow">
                  Shop Now
                </Link>
              </Col>
              <Col sm={6} md={6} className="FullWidthMobileView">
                <Image
                  src={Home_01_Img}
                  alt="Home_01_Img"
                  className="img-fluid"
                />
              </Col>
            </div>
          </Col>
          <Col sm={12} md={6} className="right_Box">
            <div className="d-flex">
              <Col sm={6} md={8} className="mensAcc">
                <div className="head">Mens accessories</div>
                <div className="desc">
                  All mens accessories are available with us and special offers
                  now
                </div>
                <Link href="#Products" className="ShopNow">
                  Shop Now
                </Link>
              </Col>
              <Col sm={6} md={4} className="witchImg">
                <Image
                  src={Home_02_Img}
                  alt="Home_02_Img"
                  className="img-fluid"
                />
              </Col>
            </div>{" "}
            <div className="d-flex">
              <Col sm={6} md={6} className="Btm_Box">
                <Image
                  src={Home_03_Img}
                  alt="Home_03_Img"
                  className="img-fluid"
                />
                <div className="Btm_head">Womens accessory</div>
              </Col>
              <Col sm={6} md={6} className="clothes Btm_Box">
                <Image
                  src={Home_04_Img}
                  alt="Home_04_Img"
                  className="img-fluid"
                />
                <div className="Btm_head">clothes and fashion</div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
