import "./product.css";
import { useState } from "react";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (val) => {
    setQuantity(val);
  };

  const getTotal = () => {
    let total = quantity * props.info.price;
    // any discount ??

    return total.toFixed(2);
  };

  const handleAdd = () => {
    console.log("Adding to cart");
  };

  return (
    <div className="product">
      <label className="prod-category">{props.info.category}</label>
      <img src={"/images/" + props.info.image} alt="product"></img>
      <h2>{props.info.title}</h2>

      <div>
        <label className="total">${getTotal()}</label>
        <label className="price">${props.info.price.toFixed(2)}</label>
      </div>

      <div>
        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
        <button onClick={handleAdd} className="btn-add btn btn-sm btn-info">
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;

/**
 *
 * create a test component
 * show that on /test page
 *
 * two state variables
 * 1 - full name
 * 2 - email address
 *
 *
 * print the full name and email address on the screen
 *
 *
 */
