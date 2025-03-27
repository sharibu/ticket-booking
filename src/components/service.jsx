import React from 'react';
import './ServicesPage.css'; // Include custom styles for the services page

export const ServicesPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <i className="bi bi-ticket-fill fs-1 mb-3 text-primary"></i>
              <h5 className="card-title">Movie Ticket Booking</h5>
              <p className="card-text">
                Book tickets for your favorite movies instantly from the comfort of your home.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <i className="bi bi-cup-fill fs-1 mb-3 text-warning"></i>
              <h5 className="card-title">Snacks and Beverages</h5>
              <p className="card-text">
                Pre-order snacks and drinks to enjoy during your movie without waiting in line.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <i className="bi bi-person-video3 fs-1 mb-3 text-success"></i>
              <h5 className="card-title">Exclusive Memberships</h5>
              <p className="card-text">
                Become a member to enjoy exclusive discounts, offers, and priority bookings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <i className="bi bi-film fs-1 mb-3 text-danger"></i>
              <h5 className="card-title">Latest Movie Updates</h5>
              <p className="card-text">
                Stay updated with the latest movie releases, trailers, and showtimes.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <i className="bi bi-calendar-event-fill fs-1 mb-3 text-info"></i>
              <h5 className="card-title">Event Screenings</h5>
              <p className="card-text">
                Book tickets for special event screenings and live shows at our cinemas.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <i className="bi bi-headset fs-1 mb-3 text-secondary"></i>
              <h5 className="card-title">Customer Support</h5>
              <p className="card-text">
                Get 24/7 assistance for any queries or support related to our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;