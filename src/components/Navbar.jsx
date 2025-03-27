import {Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo.jpg";
import { CartContext } from "./CartContext";
import { AuthContext } from './AuthContext';
import { useContext } from "react";
import './Button.css';

export const NavigationBar = ({ onLogout }) => {
  const { count } = useContext(CartContext);
  const { isAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="container-fluid NavBarBG">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light text-light h4">
        <Link className="navbar-brand" to="/">
        <img src={Logo} alt="Logo" className="navbar-logo" style={{ width: "100px" }} />
      </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/cart" className="btn btn-dark px-4 py-2 text-light fs-5 fw-5 me-3 NavIcon text-light">
                  <i className="bi bi-cart-plus">
                    <span className="bg-danger mb-2 me-1 px-2" style={{ borderRadius: "50%" }}>
                      {count}
                    </span>
                  </i>
                </Link>
              </li>
              <li className="nav-item">
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="btn btn-danger me-2 px-4 py-2 text-light fs-5 fw-5"
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    className="btn btn-primary me-2 px-4 py-2 text-light fs-5 fw-5"
                  >
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};