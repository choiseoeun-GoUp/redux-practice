import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/ItemListContainer";
import CartContainer from "./pages/CartContainer";
import Nav from "./component/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
