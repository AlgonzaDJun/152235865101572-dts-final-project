import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import About from "./container/About";
import Product from "./container/Product";
import Contact from "./container/Contact";
import Header from "./components/Header";
import Cart from "./container/Cart";
import theme from "./theme/theme";

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
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
