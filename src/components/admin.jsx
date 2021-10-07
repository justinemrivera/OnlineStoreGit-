import { useState, useEffect } from "react";
import "./admin.css";
import ItemService from "../services/itemService";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

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
  const cctextChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let copy = { ...coupon };
    copy[name] = value;
    setCoupon(copy);
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
  const Apply = async () => {
    var copy = { ...coupon };
    copy.discount = parseFloat(copy.discount);
    console.log("coupon applied");
    console.log(coupon);
    let service = new ItemService();
    let resp = await service.saveCouponCode(copy);
    console.log(resp);
  };
  const loadCouponCodes = async () => {
    let service = new ItemService();
    let cclist = await service.getCouponCodes();
    setAllCoupons(cclist);
    console.log(cclist);
  };

  useEffect(() => {
    loadCouponCodes();
  }, []);

  return (
    <div className="admin-page row">
      <div className="column">
        <h2>Store Management</h2>

        <div className=" my-control">
          <label>Title:</label>
          <input type="text" name="title" onChange={textChange} />
        </div>

        <div className="my-control">
          <label>Price:</label>
          <input type="text" name="price" onChange={textChange} />
        </div>

        <div className="my-control">
          <label>Category:</label>
          <input type="text" name="category" onChange={textChange} />
        </div>

        <div className="my-control">
          <label>Image:</label>
          <input type="text" name="image" onChange={textChange} />
        </div>

        <div className="my-control">
          <label>Discount:</label>
          <input type="text" name="image" onChange={textChange} />
        </div>

        <div className="my-control">
          <label>Minimum:</label>
          <input type="text" name="minimum" onChange={textChange} />
        </div>

        <div className="my-control">
          <button className="btn-dark" onClick={register}>
            Register Item
          </button>
        </div>
      </div>
      <div className="column">
        <div className="my-coupons">
          <h4>Apply Coupons</h4>

          <div className="my-coupons">
            <label>Code:</label>
            <input type="text" name="code" onChange={cctextChange} />
          </div>

          <div className="my-coupons">
            <label>discount:</label>
            <input type="text" name="discount" onChange={cctextChange} />
          </div>

          <div className="my-coupons">
            <button className="btn btn-info" onClick={Apply}>
              Register code
            </button>
          </div>
        </div>
        <div className="coupons-container">
          <h5>Current Coupons</h5>
          <ul>
            {allCoupons.map((x) => (
              <li key={x.code}>
                {x.code} - {x.discount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
