import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteItemFromCart } from "../Redux/StoreSlice";

function Cart() {
  let { cartItems, logstatus } = useSelector((state) => state.ASRStore);

  let Total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    Total += cartItems[i].Quantity * cartItems[i].price;
  }
  let dispatch = useDispatch();
  return (
    <div className="Cart">
      <Container>
        <div className="head">My Shopping Cart</div>
        {cartItems.length > 0 ? (
          <Row>
            <Col sm={12} md={8} className="CartDetails">
              <Row className="cartTitles">
                <Col md={2} sm={2} xs={2}>
                  Product Image
                </Col>
                <Col md={2} sm={2} xs={2}>
                  Name
                </Col>
                <Col md={2} sm={2} xs={2}>
                  Quatity
                </Col>
                <Col md={2} sm={2} xs={2}>
                  Discount
                </Col>
                <Col md={2} sm={2} xs={2}>
                  Price
                </Col>
                <Col md={2} sm={2} xs={2}>
                  Delete
                </Col>
              </Row>

              {cartItems.map((el) => {
                return (
                  <Row key={el.id} className="product">
                    <Col sm={2} md={2} xs={2}>
                      <Image
                        src={el.images}
                        alt={el.title}
                        className="img-fluid"
                        width={200}
                        height={200}
                      />
                    </Col>
                    <Col className="title" sm={2} md={2} xs={2}>
                      {el.title}
                    </Col>
                    <Col className="title" sm={2} md={2} xs={2}>
                      {el.Quantity}
                    </Col>
                    <Col className="title" sm={2} md={2} xs={2}>
                      {el.discount}
                    </Col>
                    <Col className="title" sm={2} md={2} xs={2}>
                      {el.price * el.Quantity}$
                    </Col>
                    <Col className="title" sm={2} md={2} xs={2}>
                      <i
                        class="bi bi-trash3-fill dlt"
                        onClick={(e) => {
                          dispatch(DeleteItemFromCart(el.id));
                        }}
                      ></i>
                    </Col>
                  </Row>
                );
              })}
            </Col>
            <Col sm={12} md={4} className="BillDetails">
              <Form className="d-flex coupon">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Coupon Code"
                />
                <Button className="btn btn-warning">Apply Coupon</Button>
              </Form>
              <div className="BiilTitles d-flex">
                <div className="title">Product Name</div>
                <div className="title">Price</div>
              </div>
              <hr />
              {cartItems.map((el) => {
                return (
                  <div key={el.id} className="BiilDetails d-flex">
                    <div className="title">{el.title}</div>
                    <div className="title"> {el.price * el.Quantity}$</div>
                  </div>
                );
              })}
              <hr />
              <div className="d-flex justify-content-between">
                <div className="title">DisCount</div>
                <div className="title">0%</div>
              </div>
              <div className=" d-flex justify-content-between">
                <div className="title">Total</div>
                <div className="title">{Total}$</div>
              </div>
              <hr />
              {logstatus ? (
                <Link href="/checkout" className="tocheckout">
                  Proceed To CheckOut
                </Link>
              ) : (
                <Link href="/login" className="LogToCont">
                  LogIn To continue
                </Link>
              )}
            </Col>
          </Row>
        ) : (
          <div className="noItem">There are no products in your cart</div>
        )}
      </Container>
    </div>
  );
}

export default Cart;
