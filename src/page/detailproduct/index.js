import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonNormal } from "../../components";
import { DataLaptop } from "../../data/laptop";
import "./style.css";

const DetailProduct = () => {
  let [count, setCount] = useState(1);
  const { title } = useParams();

  function plus() {
    count = count + 1;
    setCount(count);
  }

  function minus() {
    count = count - 1;
    setCount(count);
  }

  function AddCart() {
    alert("please login / create an account");
  }

  return (
    <>
      {DataLaptop.filter(product => product.title === title).map(item => (
        <div className="detailproduct-row">
          <div className="detailproduct-img">
            <img src={item.image} alt="detail product" />
          </div>
          <div className="detailproduct-desc">
            <div className="detail-cart">
              <div className="cart-title">
                <h2 className="detail-title">{item.title}</h2>
                <p>
                  <i className="fas fa-star" /> 4.5 || sold 500 +
                </p>
                <h1>{item.price}</h1>
              </div>
              <div className="cart-value">
                <p>CART</p>
                <div className="value-cart">
                  <button onClick={minus}> - </button>
                  <p>{count}</p>
                  <button onClick={plus}> + </button>
                </div>
                <p>Total</p>
                <p>{item.price}</p>
                <ButtonNormal
                  click={AddCart}
                  title="add"
                  icon="fas fa-shopping-cart"
                />
              </div>
            </div>
            <p className="detail-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailProduct;
