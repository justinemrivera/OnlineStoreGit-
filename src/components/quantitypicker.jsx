import React, { useState } from "react";
import "./quantitypicker.css";
const QuantityPicker = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    let val = quantity + 1;
    setQuantity(val);
    props.onChange(val);
  };
  const handleDecrease = () => {
    if (quantity === 1) return;

    let val = quantity - 1;
    setQuantity(val);
    props.onChange(val);
  };

  return (
    <div className="quantity-picker">
      <button className="btn btn-sm btn-primary" onClick={handleIncrease}>
        +
      </button>
      <label>{quantity}</label>
      <button
        className="btn btn-sm btn-primary"
        disabled={quantity === 1}
        onClick={handleDecrease}
      >
        -
      </button>
    </div>
  );
};

export default QuantityPicker;
