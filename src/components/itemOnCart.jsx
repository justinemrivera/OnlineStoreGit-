import "./itemOnCart.css";
import { useContext } from "react";
import storeContext from "../context/storeContext";

const ItemOnCart = (props) => {
  const removeFromCart = useContext(storeContext).removeProductFromCart;
  const getTotal = () => {
    let total = props.data.quantity * props.data.price;
    return total.toFixed(2);
  };
  const handleRemove = () => {
    console.log("remove item");
    removeFromCart(props.data._id);
  };

  return (
    <div className="item-on-cart">
      <img src={"/images/" + props.data.image} alt=""></img>
      <div className="item-info">
        <h6>{props.data.title}</h6>
        <label>{props.data.category}</label>
      </div>
      <label>{props.data.price}</label>
      <label>{props.data.quantity}</label>
      <label>{getTotal()}</label>
      <button onClick={handleRemove} className="btn btn-sm btn-dark">
        Remove
      </button>
    </div>
  );
};

export default ItemOnCart;
