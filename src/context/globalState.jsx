import React, { useState } from "react";
import StoreContext from "./storeContext";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    id: 81237,
    name: "Justine",
    email: "test@mail.com",
  });

  const addToCart = (product) => {
    console.log("adding to cart", product);
    var copy = [...cart];

    let found = false;
    for (let i = 0; i < copy.length; i++) {
      let prod = copy[i];
      if (prod._id === product._id) {
        found = true;
        prod.quantity += product.quantity;
      }
    } //end for

    if (!found) {
      copy.push(product);
    }

    setCart(copy);
    //TODO:Store cart in LocalStorage
  };

  const removeFromCart = (productId) => {
    let copy = [...cart];
    console.log("removing", productId);
    for (let i = 0; i < copy.length; i++) {
      let prod = copy[i];
      if (prod._id == productId) {
        console.log("Found it");
        //remove prod from the array
        copy.splice(i, 1);
        break; //end for loop
      }
    }
    setCart(copy);
  };

  return (
    <StoreContext.Provider
      value={{
        cart: cart,
        user: user,
        addProductToCart: addToCart,
        removeProductFromCart: removeFromCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default GlobalState;
