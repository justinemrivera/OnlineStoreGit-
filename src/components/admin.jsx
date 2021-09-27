import { useState } from "react";
import "./admin.css";
import ItemService from "../services/itemService";

const Admin = () => {
  const [product, setProduct] = useState({});

  const textChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    // create a copy of the object
    let copy = { ...product }; //create a hard copy of an object
    // modify the copy
    copy[name] = value;
    // set the copy to the state
    setProduct(copy);
  };

  const register = () => {
    var copy = { ...product };
    copy.price = parseFloat(copy.price);
    copy.discount = parseFloat(copy.discount);
    copy.stock = +copy.stock;
    copy.minimum = copy.minimum * 1;

    console.log(copy);
    let service = new ItemService();
    service.saveItem(copy);
  };

  return (
    <div className="admin-page">
      <h1>Store Management</h1>

      <div className="my-control">
        <label>Title</label>
        <input type="text" name="title" onChange={textChange} />
      </div>

      <div className="my-control">
        <label>Price</label>
        <input type="text" name="price" onChange={textChange} />
      </div>

      <div className="my-control">
        <label>Category</label>
        <input type="text" name="category" onChange={textChange} />
      </div>

      <div className="my-control">
        <label>Image</label>
        <input type="text" name="image" onChange={textChange} />
      </div>

      <div className="my-control">
        <label>Discount</label>
        <input type="text" name="image" onChange={textChange} />
      </div>

      <div className="my-control">
        <label>Minimum</label>
        <input type="text" name="minimum" onChange={textChange} />
      </div>

      <div className="my-control">
        <button className="btn-dark" onClick={register}>
          Register Item
        </button>
      </div>
    </div>
  );
};

export default Admin;
