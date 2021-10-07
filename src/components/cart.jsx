import "./cart.css";
import React, { useContext, useState } from "react";
import StoreContext from "../context/storeContext";
import ItemOnCart from "./itemOnCart";
import ItemService from "../services/itemService";

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState(false);
  const [couponObj, setCouponObj] = useState(null);
  const [order, setOrder] = useState("");
  const cart = useContext(StoreContext).cart;

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.price * prod.quantity;
    }
    if (couponObj) {
      let discount = couponObj.discount;
      total = total - (total * discount) / 100;
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
  const codeChange = (event) => {
    setCouponCode(event.target.value);
    console.log(event.target.value);
  };

  const handleValidate = async () => {
    console.log("validate", couponCode);
    let service = new ItemService();
    let res = await service.validateCoupon(couponCode);
    console.log(res);
    if (!res) {
      setCouponError(true);
      return;
    }
    setCouponError(false);
    setCouponObj(res);
  };
  const handleSave = async () => {
    console.log("order");
    let service = new ItemService();
    let order = { userId: 42, coupon: couponObj, products: cart };
    let res = await service.saveOrder(order);
    console.log(res);
  };

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
          <button ClassName="btn btn-block btn-primary" onClick={handleSave}>
            Submit Order
          </button>
        </div>
      </div>
      <div className="coupon-cart">
        <div>
          <label>Do you have a coupon?</label>
          {couponError ? (
            <div className="alert alert-danger"> Invalid Code</div>
          ) : null}

          <input placeholder="Apply Coupon" name="code" onChange={codeChange} />
          <button className="btn btn-sm btn-info" onClick={handleValidate}>
            Validate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
