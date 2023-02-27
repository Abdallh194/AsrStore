import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  AddItemsToOrders,
  AddressLocation,
  DeleteAllItemINCart,
  setDate,
} from "../Redux/StoreSlice";

function Checkout() {
  let { cartItems } = useSelector((state) => state.ASRStore);

  let Total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    Total += cartItems[i].Quantity * cartItems[i].price;
  }

  let [ConfirmOrder, setConfirmOrder] = useState("");
  let OpenModal = (Order) => {
    setConfirmOrder(Order);
  };
  let CloseModal = () => {
    setConfirmOrder(false);
  };
  let dispatch = useDispatch();

  let day = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let ordDate = `${day}  -  ${month} - ${year}`;
  let [fullDate, setOrdDate] = useState(ordDate);
  let [FirstName, setFirstName] = useState("");
  let [LastName, setLastName] = useState("");
  let [Email, setEmail] = useState("");
  let [Mobile, setMobile] = useState("");
  let [Address_01, setAddress_01] = useState("");
  let [Address_02, setAddress_02] = useState("");
  let [Country, setCountry] = useState("");
  let [City, setCity] = useState("");
  let [ZipCode, setZipCode] = useState("");
  let [State, setState] = useState("");
  // form valid
  let [FNameValid, setFNameValid] = useState(false);
  let [LNameValid, setLNameValid] = useState(false);
  let [EmailValid, setEmailValid] = useState(false);
  let [MobileValid, setMobileValid] = useState(false);
  let [AddressoneValid, setAddressoneValid] = useState(false);
  let [AddresstwoValid, setAddresstwoValid] = useState(false);
  let [CountryValid, setCountryValid] = useState(false);
  let [CityValid, setCityValid] = useState(false);
  let [ZipValid, setZipValid] = useState(false);
  let [StateValid, setStateValid] = useState(false);
  let [infoValid, setinfoValid] = useState(false);
  let [infoNotValid, setinfoNotValid] = useState(false);
  let ConfirmModal = () => {
    CloseModal();
    dispatch(DeleteAllItemINCart());
    dispatch(setDate(fullDate));
    dispatch(AddItemsToOrders());
    dispatch(AddressLocation(Address_01));
  };
  return (
    <div className="Checkout">
      <Container>
        {cartItems.length > 0 ? (
          <Row>
            <Col xs={12} sm={12} md={12} lg={8}>
              <div className="head">Billing Information</div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (
                    FNameValid === false ||
                    LNameValid === false ||
                    EmailValid === false ||
                    MobileValid === false ||
                    AddressoneValid === false ||
                    AddresstwoValid === false ||
                    CountryValid === false ||
                    CityValid === false ||
                    ZipValid === false ||
                    StateValid === false
                  ) {
                    setinfoValid(false);
                  } else {
                    setinfoValid(true);
                  }
                }}
              >
                <Row>
                  <Col xs={12} sm={12} md={6} className="inputInfo">
                    <input
                      className="form-control"
                      type="text"
                      required
                      placeholder="First Name"
                      onChange={(e) => {
                        if (e.target.value.length < 3) {
                          e.target.classList.add("wrong");
                          e.target.classList.remove("true");
                        } else {
                          setFirstName(e.target.value);
                          setFNameValid(true);
                          e.target.classList.add("true");
                          e.target.classList.remove("wrong");
                        }
                      }}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} className="inputInfo">
                    <input
                      type="text"
                      className="form-control input_custom"
                      placeholder="Last Name"
                      required
                      onChange={(e) => {
                        if (e.target.value.length < 3) {
                          e.target.classList.add("wrong");
                          e.target.classList.remove("true");
                        } else {
                          setLastName(e.target.value);
                          e.target.classList.add("true");
                          e.target.classList.remove("wrong");
                          setLNameValid(true);
                        }
                      }}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} className="inputInfo">
                    <input
                      type="email"
                      className="form-control input_custom"
                      placeholder="E-Mail"
                      required
                      onChange={(e) => {
                        if (e.target.value.length < 8) {
                          e.target.classList.add("wrong");
                          e.target.classList.remove("true");
                        } else {
                          setEmail(e.target.value);
                          e.target.classList.add("true");
                          e.target.classList.remove("wrong");
                          setEmailValid(true);
                        }
                      }}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} className="inputInfo">
                    <input
                      type="number"
                      className="form-control input_custom"
                      placeholder="Mobile No"
                      required
                      onChange={(e) => {
                        if (e.target.value.length < 10) {
                          e.target.classList.add("wrong");
                          e.target.classList.remove("true");
                        } else {
                          setMobile(e.target.value);
                          e.target.classList.add("true");
                          e.target.classList.remove("wrong");
                          setMobileValid(true);
                        }
                      }}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} className="inputInfo">
                    <input
                      type="text"
                      className="form-control input_custom"
                      placeholder="Address 1"
                      required
                      onChange={(e) => {
                        if (e.target.value.length < 3) {
                          e.target.classList.add("wrong");
                          e.target.classList.remove("true");
                        } else {
                          setAddress_01(e.target.value);
                          e.target.classList.add("true");
                          e.target.classList.remove("wrong");
                          setAddressoneValid(true);
                        }
                      }}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} className="inputInfo">
                    <input
                      type="text"
                      className="form-control input_custom"
                      placeholder="Address 2"
                      required
                      onChange={(e) => {
                        if (e.target.value.length < 3) {
                          e.target.classList.add("wrong");
                          e.target.classList.remove("true");
                        } else {
                          setAddress_02(e.target.value);
                          e.target.classList.add("true");
                          e.target.classList.remove("wrong");
                          setAddresstwoValid(true);
                        }
                      }}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} className="inputInfo">
                    {" "}
                    <input
                      type="text"
                      className="form-control input_custom"
                      placeholder="Country"
                      required
                      onChange={(e) => {
                        if (e.target.value.length < 2) {
                          e.target.classList.add("wrong");
                          e.target.classList.remove("true");
                        } else {
                          setCountry(e.target.value);
                          e.target.classList.add("true");
                          e.target.classList.remove("wrong");
                          setCountryValid(true);
                        }
                      }}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} className="inputInfo">
                    <input
                      type="text"
                      className="form-control input_custom"
                      placeholder="City"
                      required
                      onChange={(e) => {
                        if (e.target.value.length < 3) {
                          e.target.classList.add("wrong");
                          e.target.classList.remove("true");
                        } else {
                          setCity(e.target.value);
                          e.target.classList.add("true");
                          e.target.classList.remove("wrong");
                          setCityValid(true);
                        }
                      }}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} className="inputInfo">
                    <input
                      type="text"
                      className="form-control input_custom"
                      placeholder="State"
                      required
                      onChange={(e) => {
                        if (e.target.value.length < 4) {
                          e.target.classList.add("wrong");
                          e.target.classList.remove("true");
                        } else {
                          setState(e.target.value);
                          e.target.classList.add("true");
                          e.target.classList.remove("wrong");
                          setStateValid(true);
                        }
                      }}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} className="inputInfo">
                    <input
                      type="number"
                      className="form-control input_custom"
                      placeholder="ZIP Code"
                      required
                      onChange={(e) => {
                        if (e.target.value.length < 4) {
                          e.target.classList.add("wrong");
                          e.target.classList.remove("true");
                        } else {
                          setZipCode(e.target.value);
                          e.target.classList.add("true");
                          e.target.classList.remove("wrong");
                          setZipValid(true);
                        }
                      }}
                    />
                  </Col>
                  {infoNotValid ? (
                    <div className="error">
                      There is an error in the data, please check Your data
                    </div>
                  ) : (
                    ""
                  )}
                  <input
                    type="submit"
                    value={infoValid === true ? "Submitted ✓" : "Submit"}
                    className="form-control"
                    id="submit"
                    onClick={(e) => {
                      if (infoValid) {
                        e.target.classList.add("infoValid");
                        setinfoNotValid(false);
                      } else {
                        e.target.classList.remove("infoValid");
                        setinfoNotValid(true);
                      }
                    }}
                  />
                </Row>
              </form>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4}>
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
              {infoValid ? (
                <div
                  className="pay"
                  onClick={() => {
                    OpenModal(cartItems);
                  }}
                >
                  Confirm Order
                </div>
              ) : (
                ""
              )}
              <ReactModal isOpen={ConfirmOrder} onRequestClose={CloseModal}>
                <div className="ModalItem">
                  {/* <i className="bi bi-x ModalClose" onClick={CloseModal}></i> */}
                  <div className="ModalHead">
                    Your Order has been registered successfully
                  </div>
                  <i class="bi bi-check-circle-fill subtrue mb-2 mt-2"></i>
                  <div className="ModalHead">
                    at the address :{" "}
                    <div>
                      {Country} , {City} , {State}
                    </div>
                    <hr />
                  </div>
                  <div className="ModalHead">ordered in {fullDate}</div>
                  <div className="ModalHead">After 3 days From Now</div>
                  <div className="confirm" onClick={ConfirmModal}>
                    Confirm
                  </div>
                </div>
              </ReactModal>
            </Col>
          </Row>
        ) : (
          <div className="error">There are no products in your cart</div>
        )}
      </Container>
    </div>
  );
}

export default Checkout;
