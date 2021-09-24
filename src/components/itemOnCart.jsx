import "./itemOnCart.css";

const ItemOnCart = (props) => {
  const getTotal = () => {
    let total = props.data.quantity * props.data.price;
    return total.toFixed(2);
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
      <button className="btn btn-sm btn-dark">Remove</button>
    </div>
  );
};

export default ItemOnCart;
