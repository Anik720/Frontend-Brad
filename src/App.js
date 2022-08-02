import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {Routes, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";

const App = () => {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>} ></Route>
        <Route path="/product/:id" element={<ProductScreen></ProductScreen>}></Route>
        <Route path="/cart/:id" element={<CartScreen></CartScreen>}></Route>

      </Routes>

      <Footer />
    </>
  );
};

export default App;
