import React, { useContext } from 'react';
import { CartContext } from './context';

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    if (!cartItems.length) {
        return <p>Your cart is empty.</p>;
    }

    return (
        <div className="container">
            <div className="row">
                {cartItems.map((item) => (
                    <div key={item._id} className="col-lg-6">
                        <div className='card'>
                            {item.image ? (
                                <img src={item.image} alt='movie' className="img" />
                            ) : (
                                <p>No image available</p>
                            )}
                            <div>
                                <div>Id: {item._id}</div>
                                <p>Price: ${item.ticketprice}</p>
                                <h1>Budget: ${item.budget}</h1>
                                <p>Title: {item.title}</p>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => removeFromCart(item._id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;