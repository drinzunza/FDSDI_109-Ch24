import "./quantityPicker.css";
import React, { useState } from "react";

const QuantityPicker = (props) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    console.log("Increment the value");
    let val = quantity + 1;
    setQuantity(val);
    props.onChange(val);
  };

  const decrement = () => {
    console.log("Decrement the value");
    if (quantity > 1) {
      let val = quantity - 1;
      setQuantity(val);
      props.onChange(val);
    }
  };

  return (
    <div className="quantityPicker">
      <button className="btn btn-sm btn-dark" onClick={decrement}>
        -
      </button>
      <label> {quantity} </label>
      <button className="btn btn-sm btn-dark" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default QuantityPicker;
