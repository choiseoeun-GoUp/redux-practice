import React from "react";

export default function cartContainer() {
  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">장바구니</div>
        <div id="shopping-cart-container">
          {/* {!cartItems.length ? (
            <div id="item-list-text">장바구니에 아이템이 없습니다.</div>
          ) : (
            <div id="cart-item-list"></div>
          )} */}
          <div>장바구니에 아이템이 없습니다.</div>
        </div>
      </div>
    </div>
  );
}
