import React from 'react';
import './ContactPage.css';

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="text-center my-5">Contact Us</h1>
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> 123 Movie Street, Film City</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Email:</strong> support@moviesite.com</p>
          </div>
          <div className="col-md-6">
            <h3>Send Us a Message</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;