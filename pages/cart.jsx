import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  let { cartItems } = useSelector((state) => state.ASRStore);
  return (
    <div>
      {cartItems.map((el) => {
        return (
          <div key={el.id}>
            <div className="title">{el.title}</div>
            <p className="price">{el.price}$</p>
            <p className="price">{el.Quantity}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
