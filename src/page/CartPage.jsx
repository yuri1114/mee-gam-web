import React from "react";

const CartPage = () => {
  return (
    <div className="cart-page">
      <p className="page-title">장바구니</p>

      <div className="table">
        <div className="top-title">
          <p>THUMBNAIL</p>
          <p>PRODUCT</p>
          <p>OPTION</p>
          <p>PRICE</p>
          <p>QUANTITY</p>
          <p></p>
        </div>
        <div className="row">
          <div className="thumbnail">
            <img src="" alt="" />
          </div>

          <div className="title">
            <p className="item">asdf</p>
            <p className="name">asdf</p>
          </div>

          <p className="option">asdf</p>

          <p className="price">asdf</p>

          <div className="quantity">
            <button>-</button>
            <p className="num">1</p>
            <button>+</button>
          </div>

          <button className="remove">REMOVE</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
