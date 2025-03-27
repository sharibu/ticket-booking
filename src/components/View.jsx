import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from './CartContext';

export const View = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [error, setError] = useState(null);
  const { removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://backend-crud-one.vercel.app/product/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error("Error:", err);
        setError("Failed to load product details");
      });
  }, [id]); 

  return (
    <div className="container text-dark">
      <div className="row mt-4">
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            <div className="col-md-6">
              <div className="card">
                {product ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                  />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
            <div className="col-md-6">
              {product ? (
                <div>
                  <h2>{product.name}</h2>
                  <p>
                    <b>Director:</b> {product.director}
                  </p>
                  <p>
                    <b>Release Date:</b> {product.releasedate}
                  </p>
                  <p>
                    <b>Budget:</b> {product.budget}
                  </p>
                  <p>
                    <b>Description :</b> {product.description}
                  </p>
                  <p>
                    <b>Ticket Price:</b> ${product.ticketprice}
                  </p>
                  <button 
                    className="btn btn-danger mt-3"
                    onClick={() => {
                      if (window.confirm('Are you sure you want to remove this product?')) {
                        removeFromCart(product._id);
                        navigate('/');
                      }
                    }}
                  >
                    Remove 
                  </button>
                </div>
              ) : (
                <p>Loading product details...</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};