import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div id="nav-body">
      <span id="title">
        <span id="name">SunMarket</span>
      </span>
      <div id="menu">
        <Link to="/">상품리스트</Link>
        <Link to="/cart">장바구니</Link>
      </div>
    </div>
  );
}
