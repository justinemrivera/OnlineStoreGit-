import { useState } from "react";
import "./admin.css";
const Admin = () => {
  const [product, setProduct] = useState({});

  const textChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    // create a copy of the object
    let copy = { ...product }; //creat a hard copy of an object
    // modify the copy
    copy[name] = value;
    // set the copy to the state
    setProduct(copy);
  };

  const register = () => {
    console.log(product);
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
