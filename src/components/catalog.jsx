import React, { useEffect, useState } from "react";
import Item from "./item";
import "./catalog.css";
import ItemService from "../services/itemService";

const Catalog = () => {
  //state variables
  let [products, setProducts] = useState([]);
  let [itemsOnDisplay, setItemsOnDisplay] = useState([]);
  let [categories, setCategories] = useState([]);

  //logic (fns)
  const retreiveCatalog = async () => {
    let service = new ItemService();
    let cat = await service.getCatalog();
    setProducts(cat);
    setItemsOnDisplay(cat);
    console.log(cat);

    let categories = [];
    for (let i = 0; i < cat.length; i++) {
      let prod = cat[i];
      console.log(prod.category);

      if (!categories.includes(prod.category)) {
        categories.push(prod.category);
      }
    }
    console.log(categories);
    setCategories(categories);
  };

  //effects
  useEffect(() => {
    retreiveCatalog();
  }, []); //[] added to sensure logic will be called only ONE TIME

  const handlefilter = (category) => {
    console.log("filter", category);

    let filtered = [];
    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === category) {
        filtered.push(prod);
      }
    }
    setItemsOnDisplay(filtered);
  };
  const handleFilterReset = () => {
    setItemsOnDisplay(products);
  };

  //return
  return (
    <div className="catalog-page">
      <h3>Gold and Gold Plated Jewelry</h3>
      <h6>Currently we have {products.length} new items</h6>

      <div className="filter">
        <button onClick={handleFilterReset} className="btn btn-sm btn-dark">
          All
        </button>

        {categories.map((cat) => {
          return (
            <button
              onClick={() => {
                handlefilter(cat);
              }}
              key={cat}
              className="btn btn-small btn-info mx-1"
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="item-container">
        {itemsOnDisplay.map((prod) => (
          <Item key={prod._id} data={prod}></Item>
        ))}
      </div>
    </div>
  );
};
export default Catalog;
