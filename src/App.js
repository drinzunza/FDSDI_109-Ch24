import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Home from "./components/home";
import About from "./components/about";
import Cart from "./components/cart";
import Test from "./components/test";
import GlobalContext from "./context/globalContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalContext>
        <BrowserRouter>
          <NavBar></NavBar>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/aboutme" element={<About />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/test" element={<Test />}></Route>
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </GlobalContext>
    </div>
  );
}

export default App;

/**
 *
 * Create a component
 * Create the css
 * Import into app.js
 * Create a route for /cart
 */
