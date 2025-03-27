import React, { useContext } from 'react';
import { CartContext } from `./CartContext`;

const MovieList = ({ movies }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="row">
      {movies.map(movie => (
        <div className="col-md-4 mb-4" key={movie._id}>
          <div className="card">
            {movie.image && (
              <img src={movie.image} className="card-img-top" alt={movie.title} />
            )}
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">Price: ₹{movie.ticketprice}</p>
              <p className="card-text">Budget: ₹{movie.budget}</p>
              <button 
                className="btn btn-primary me-2"
                onClick={() => addToCart(movie)}
              >
                Add to Cart
              </button>
              <button 
                className="btn btn-danger"
                onClick={() => removeFromCart(movie._id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;