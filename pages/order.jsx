import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteAllItemINOrders } from "../Redux/StoreSlice";
function Order() {
  let { orderItems, user, email, address, orderDate } = useSelector(
    (state) => state.ASRStore
  );
  let Total = 0;
  for (let i = 0; i < orderItems.length; i++) {
    Total += orderItems[i].Quantity * orderItems[i].price;
  }
  let dispatch = useDispatch();
  return (
    <div className="orders">
      <Container>
        {orderItems.length > 0 ? (
          <Row>
            <div className="head">My Orders</div>
            <div className="header">
              <Col xs={2} sm={2} md={2} lg={2} className="titles">
                Products
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} className="titles">
                Orderd By
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} className="titles">
                Email
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} className="titles">
                Deliverd In
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} className="titles">
                Total
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} className="titles">
                Delete
              </Col>
            </div>
            <div className="orderdetails">
              <Col xs={2} sm={2} md={2} lg={2} className="titles">
                {orderItems.map((el) => {
                  return (
                    <div key={el.id} className="products">
                      <p>-{el.title}</p>
                    </div>
                  );
                })}
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} className="resposivePosision">
                {user}
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} className="resposivePosision">
                {email}
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} className="resposivePosision">
                After 3 days
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} className="resposivePosision">
                {Total}$
              </Col>
              <Col xs={2} sm={2} md={2} lg={2} className="resposivePosision">
                <i
                  class="bi bi-trash3-fill dlt"
                  onClick={(e) => {
                    dispatch(DeleteAllItemINOrders());
                  }}
                ></i>
              </Col>
            </div>
            <div className="location">
              The address that will be reached is : {address}
            </div>
            <div className="time">
              The time requested in the order is : {orderDate}
            </div>
          </Row>
        ) : (
          "There is no order"
        )}
      </Container>
    </div>
  );
}
export default Order;
