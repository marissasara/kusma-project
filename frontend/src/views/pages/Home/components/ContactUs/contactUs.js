// src/pages/ContactUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'; // Ensure Navbar path is correct
import './contactUs.css';

const ContactUs = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        // Replace with the actual route if needed
        navigate('/thank_you');
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h1>Contact Us</h1>
                <h5>Contact us if you need HELP to grow your business. We’re here to support entrepreneurs like you!</h5>
                <p>Send us some details about you and your questions, so we can better understand your needs and assist you effectively.</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" placeholder="Enter your title" required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="companyName" className="form-label">Company Name</label>
                            <input type="text" className="form-control" id="companyName" placeholder="Enter your company name" required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" required />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Type Your Message Here</label>
                        <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
