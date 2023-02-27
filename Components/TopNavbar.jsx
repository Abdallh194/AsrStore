import Link from "next/link";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { HandleSearchKey } from "../Redux/StoreSlice";
const TopNavbar = () => {
  let [searchkey, setsearchkey] = useState("52");
  let dispatch = useDispatch();
  let HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(HandleSearchKey(searchkey));
  };
  let { logstatus, user } = useSelector((state) => state.ASRStore);
  return (
    <div className="TopNavbar">
      <Container>
        <Row>
          <Col sm={12} md={2} className="logo-Box">
            <Link href="/" className="logo">
              ASR STORE <i class="bi bi-cart3"></i>
            </Link>
          </Col>
          <Col sm={12} md={8} className="d-None-MobileView">
            <form className="d-flex form" onSubmit={HandleSubmit}>
              <input
                className="form-control"
                placeholder="Search"
                onChange={(e) => {
                  setsearchkey(e.target.value);
                }}
              />
              <button type="submit" className="btn btn-primary">
                Search <i className="bi bi-search"></i>
              </button>
            </form>
          </Col>
          <Col sm={12} md={2} className="icons-box">
            <div className="icons d-flex">
              {logstatus ? (
                <div>hello {user}</div>
              ) : (
                <Link href="/login" className="box">
                  <i class="bi bi-person-circle"></i>
                  <p>Login</p>
                </Link>
              )}
              <Link href="/report" className="box">
                <i class="bi bi-envelope-exclamation"></i>
                <p>Report</p>
              </Link>
              <Link href="/cart" className="box">
                <i class="bi bi-cart4"></i>
                <p>Cart</p>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopNavbar;
