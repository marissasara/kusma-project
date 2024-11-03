// src/pages/ContactUs.js
import React from 'react';
import Navbar from '../Navbar/Navbar'; // Ensure the Navbar path is correct
import './contactUs.css';

function ContactUs() {
    return (
        <div>
            <Navbar /> {/* Include the Navbar at the top */}
            <div className="container mt-5">
                <h1 className="heading">Contact Us</h1>
                <p className="contact-description">
                    If you have any questions or would like more information about KUSMA, please feel free to reach out to us. Fill in the form below, and we will get back to you as soon as possible.
                </p>

                <form className="contact-form">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter your title" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="companyName" className="form-label">Company Name</label>
                            <input type="text" className="form-control" id="companyName" placeholder="Enter your company name" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Type Your Message Here</label>
                        <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
