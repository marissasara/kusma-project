// PersonalDetails.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './personaldetails.css';
import { useNavigate } from 'react-router-dom';

const PersonalDetails = () => {

    const navigate = useNavigate();

    const handleNext = (e) => {
        e.preventDefault();
        navigate('/business-details');
    };

    return (
        <div className="container mt-5">
            <h1>Welcome to KUSMA!</h1>
            <h5>Let's set up your profile to provide you with personalized loan and business recommendations</h5>

            <div className="progress my-4">
                <div className="progress-bar" role="progressbar" style={{ width: '33%' }} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>Step 1 of 3: Personal Details</p>

            <form onSubmit={handleNext}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <select className="form-select" id="title" name="title" required>
                        <option value="" disabled>Select Title</option>
                        <option value="Mr">Mr.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Mrs">Mrs.</option>
                    </select>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="first-name" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="first-name" name="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="last-name" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="last-name" name="last-name" placeholder="Enter your last name" required />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select className="form-select" id="gender" name="gender" required>
                        <option value="" disabled>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="mykad" className="form-label">MyKad Number</label>
                    <input type="text" className="form-control" id="mykad" name="mykad" placeholder="Enter your MyKad number" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Bumiputera Status</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="bumi" name="bumi-status" value="Bumiputera" required />
                        <label className="form-check-label" htmlFor="bumi">Bumiputera</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="non-bumi" name="bumi-status" value="Non-Bumiputera" required />
                        <label className="form-check-label" htmlFor="non-bumi">Non-Bumiputera</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="birthdate" className="form-label">Birthdate</label>
                    <input type="date" className="form-control" id="birthdate" name="birthdate" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" placeholder="Enter your address" required />
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" name="city" placeholder="Enter your city" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="postcode" className="form-label">Postcode</label>
                        <input type="text" className="form-control" id="postcode" name="postcode" placeholder="Enter your postcode" required />
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <select className="form-select" id="state" name="state" required>
                        <option value="" disabled>Select your state</option>
                        <option value="Johor">Johor</option>
                        <option value="Kedah">Kedah</option>
                        <option value="Kelantan">Kelantan</option>
                        <option value="Melaka">Melaka</option>
                        <option value="Negeri Sembilan">Negeri Sembilan</option>
                        <option value="Pahang">Pahang</option>
                        <option value="Perak">Perak</option>
                        <option value="Perlis">Perlis</option>
                        <option value="Penang">Penang</option>
                        <option value="Sabah">Sabah</option>
                        <option value="Sarawak">Sarawak</option>
                        <option value="Selangor">Selangor</option>
                        <option value="Kuala Lumpur">Kuala Lumpur</option>
                        <option value="Labuan">Labuan</option>
                        <option value="Putrajaya">Putrajaya</option>
                    </select>
                </div>

                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="oku" name="oku" />
                    <label className="form-check-label" htmlFor="oku">I have an OKU card</label>
                </div>

                <button type="submit" className="btn btn-primary w-100">Next</button>
            </form>
        </div>
    );
};

export default PersonalDetails;
