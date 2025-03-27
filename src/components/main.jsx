import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavigationBar } from './Navbar';
import { CartContext } from './CartContext';
import './Button.css';

export const Main = () => {
  const [data, setData] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://backend-crud-one.vercel.app/product')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <NavigationBar />
          {data.map((item) => (
            <div className="col-lg-3 my-3 p-2" key={item._id}>
              <div className="card p-2">
                <img src={item.image} alt={item.name} className="img-fluid" />
                <h4>Title: {item.name}</h4>
                {/* <p>Release Date: {item.releasedate}</p> */}
                {/* <h6>Budget: {item.budget}</h6> */}
                <h4 className="text-danger ">${item.ticketprice}</h4>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <Link to={`/product/${item._id}`} className="btn btn-primary w-100">
                        View <i className="bi bi-eye fs-5"></i>
                      </Link>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn btn-success w-100"
                        onClick={() => addToCart(item)}
                      >
                        Add <i className="bi bi-cart-plus fs-5"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};