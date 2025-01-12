import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import About from "./container/About";
import Product from "./container/Product";
import Contact from "./container/Contact";
import Header from "./components/Header";
import Cart from "./container/Cart";
// import theme from "./theme/theme";
import RegisterModal from "./components/RegisterModal";
import LoginModal from "./components/LoginModal";
import Footer from "./components/Footer";
import ProductDetail from "./container/ProductDetail";
import HandleCart from "./components/HandleCart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<RegisterModal />} />
        <Route path="login" element={<LoginModal />} />
        <Route path="/handleCart" element={<HandleCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
