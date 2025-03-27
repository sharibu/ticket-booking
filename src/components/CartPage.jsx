import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + (item.ticketprice * item.quantity), 0);

  return (
    <div className="container mt-4">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty</p>
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="row">
            {cartItems.map(item => (
              <div key={item._id} className="col-md-6 mb-4">
                <div className="card">
                  <div className="row g-0">
                    {item.image && (
                      <div className="col-md-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid rounded-start"
                        />
                      </div>
                    )}
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Price: ₹{item.ticketprice}</p>
                        <p className="card-text">Quantity: {item.quantity}</p>
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-primary"
                            onClick={() => addToCart(item)}
                          >
                            Add More
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              if (window.confirm('Are you sure you want to remove this item?')) {
                                removeFromCart(item._id);
                              }
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-end mt-4">
            <h4>Total: ₹{total}</h4>
            <Link to="/checkout" className="btn btn-success">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;