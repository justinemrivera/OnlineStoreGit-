import "./navBar.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import StoreContext from "../context/storeContext";

function NavBar() {
  //connect and get cart
  const cart = useContext(StoreContext).cart;

  const getTotalItems = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity;
    }

    return total;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link className="btn btn-outline-light" to="/cart">
              <span className="badge bg-primary me-2">{getTotalItems()}</span>
              View Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
