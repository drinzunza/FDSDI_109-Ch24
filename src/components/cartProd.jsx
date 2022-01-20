import "./cartProd.css";
import { useContext } from "react";
import storeContext from "../context/storeContext";

const CartProd = (props) => {
  const removeFromCart = useContext(storeContext).removeProductFromCart;

  const getTotal = () => {
    let total = props.data.price * props.data.quantity;
    return total.toFixed(2);
  };

  const handleRemove = () => {
    removeFromCart(props.data._id);
  };

  return (
    <div className="cart-prod">
      <img src={"/images/" + props.data.image} alt="product"></img>
      <h6>{props.data.title}</h6>
      <label>Price: ${props.data.price}</label>
      <label>Qnty: {props.data.quantity}</label>
      <label>Total: ${getTotal()}</label>
      <button onClick={handleRemove} className="btn btn-sm btn-danger">
        Remove
      </button>
    </div>
  );
};

export default CartProd;
