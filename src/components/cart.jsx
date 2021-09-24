import "./cart.css";
import React, { useContext } from "react";
import StoreContext from "../context/storeContext";
import ItemOnCart from "./itemOnCart";

const Cart = () => {
  const cart = useContext(StoreContext).cart;

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.price * prod.quantity;
    }
    return total.toFixed(2);
  };

  if (!cart.length) {
    return (
      <div className="cart-page">
        <h3>No items in the cart</h3>
        <h6>Return to Catalog</h6>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Ready to Order?</h1>
      <h4>You currently have {cart.length} items in your cart.</h4>

      <hr />
      <div className="row">
        <div className="col-10 cart-container">
          {cart.map((prod) => (
            <ItemOnCart key={prod._id} data={prod}></ItemOnCart>
          ))}
        </div>
        <div ClassName=" col-2 total-container py-3">
          <h5>Order Total:</h5>
          <h3>$ {getTotal()}</h3>
          <hr />
          <button ClassName="btn btn-block btn-primary">Submit Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
