import Image from "next/image";

import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddItemToCart, getProducts } from "../Redux/StoreSlice";
const Products = () => {
  let dispatch = useDispatch();
  let { products, cartItems } = useSelector((state) => state.ASRStore);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  let [selectedProduct, setSelectedProduct] = useState([]);
  let HandleSelect = (e) => {
    if (e.target.value === "All") {
      setSelectedProduct(products);
    } else {
      let FilterProducts = products.filter(
        (item) => item.category === e.target.value
      );
      setSelectedProduct(FilterProducts);
    }
  };
  return (
    <div id="Products" className="Products">
      <Container>
        <div className="head">All Products</div>
        <div className="cat">Classification of products</div>
        <select
          class="form-select form-select-lg mb-3 selectBox"
          onChange={HandleSelect}
        >
          <option value="All" selected>
            All Products
          </option>
          <option value="electric machines">electric machines</option>
          <option value="Fashion and Accessories">
            Fashion and Accessories
          </option>
          <option value="Sports">Sports</option>
          <option value="Mobile">Mobile</option>
          <option value="Cars">Cars</option>
          <option value="Home Furniture">Home Furniture</option>
          <option value="jewelry"> jewelry</option>
          <option value="Other">Other Categories</option>
        </select>
        <Row>
          {selectedProduct.length > 0
            ? selectedProduct.map((el) => {
                return (
                  <div key={el.id} className="col-md-3 Product_Details">
                    <div className="imgBg">
                      <Image
                        src={el.images}
                        alt={el.title}
                        className="img-fluid"
                        width="200"
                        height="200"
                      />
                    </div>

                    <div className="title">{el.title}</div>
                    <div className="d-flex justify-content-around mt-3">
                      <div
                        className="add"
                        onClick={(e) => {
                          dispatch(AddItemToCart(el));
                          e.target.innerText = " ✓ ";
                          e.target.parentElement.parentElement.classList.add(
                            "SelectedCart"
                          );
                        }}
                      >
                        Add
                      </div>
                      <p className="price">{el.price}$</p>
                    </div>
                  </div>
                );
              })
            : products.map((el) => {
                return (
                  <div key={el.id} className="col-md-3 Product_Details">
                    <div className="imgBg">
                      <Image
                        src={el.images}
                        alt={el.title}
                        className="img-fluid"
                        width="200"
                        height="200"
                      />
                    </div>

                    <div className="title">{el.title}</div>
                    <div className="d-flex justify-content-around mt-3">
                      <div
                        className="add"
                        onClick={(e) => {
                          dispatch(AddItemToCart(el));
                          e.target.innerText = " ✓ ";
                          e.target.parentElement.parentElement.classList.add(
                            "SelectedCart"
                          );
                        }}
                      >
                        Add
                      </div>
                      <p className="price">{el.price}$</p>
                    </div>
                  </div>
                );
              })}
        </Row>
      </Container>
    </div>
  );
};
export default Products;
