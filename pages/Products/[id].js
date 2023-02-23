import Image from "next/image";
import React from "react";

const id = (props) => {
  return (
    <div key={props.id}>
      <p>{props.product.title}</p>
      <p>{props.product.price}</p>
    </div>
  );
};

export default id;
export async function getServerSideProps(context) {
  let serverSideProps = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  let data = await serverSideProps.json();
  return {
    props: {
      product: data,
    },
  };
}
