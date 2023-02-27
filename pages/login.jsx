import Link from "next/link";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LogInStatus, ResiterUser } from "../Redux/StoreSlice";

function Login() {
  let { user, pass } = useSelector((state) => state.ASRStore);
  let dispatch = useDispatch();
  let [OpenSignForm, setOpenSignForm] = useState(false);
  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");
  let [email, setemail] = useState("");
  let [loginSuccess, setloginSuccess] = useState(false);
  return (
    <div className="LogIn">
      <Row>
        <Col xs={12} md={8} sm={12} lg={8} className="logdetails">
          <div className="head">
            {OpenSignForm ? "Sign Up" : "Login to Your Account"}
          </div>
          <div className="socialHead">Login Using Social Network</div>
          <div className="icons">
            <i className="bi bi-facebook"></i>
            <i class="bi bi-google"></i>
            <i class="bi bi-linkedin"></i>
            <div className="or">OR</div>
            {loginSuccess ? (
              <div className="logsucess">
                <p>Hello Mr {user}</p>
                <Link href="/cart">
                  <i class="bi bi-arrow-left"></i> Back To Cart
                </Link>
              </div>
            ) : OpenSignForm ? (
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(ResiterUser({ username, password, email }));
                  setOpenSignForm(false);
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                  required
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  required
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  required
                />

                <input
                  type="number"
                  className="form-control"
                  placeholder="Mobile Phone"
                  required
                />
                <input
                  type="submit"
                  id="submit"
                  className="form-control"
                  value="Sign Up"
                />
              </Form>
            ) : (
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (username === user && password === pass) {
                    setloginSuccess(true);
                    dispatch(LogInStatus());
                  }
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                  required
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
                <button type="submit" id="submit" className="form-control">
                  Login
                </button>
              </Form>
            )}
          </div>
        </Col>
        <Col xs={12} md={4} sm={12} lg={4} className="signup">
          <div className="head">New Here?</div>
          <div className="desc">
            Register with us now and buy products at great discounts
          </div>
          {OpenSignForm ? (
            ""
          ) : (
            <div
              className="signBtn"
              onClick={() => {
                setOpenSignForm(true);
              }}
            >
              Sign Up
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Login;
