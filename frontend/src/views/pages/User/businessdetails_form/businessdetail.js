// BusinessDetailsForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './businessdetails.css';

const BusinessDetailsForm = () => {
    const [hasBusiness, setHasBusiness] = useState(null);
    const navigate = useNavigate();

    const handleNext = (e) => {
        e.preventDefault();
        navigate('/education-loan'); // Adjust path if needed
    };

    return (
        <div className="container mt-5">
            <h1>Business Details</h1>
            <h5>Provide your business information to help us find suitable loan programs for you</h5>

            <div className="progress my-4">
                <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>Step 2 of 3: Business Details</p>

            <form onSubmit={handleNext}>
                {/* Radio buttons for Business Question */}
                <div className="mb-3">
                    <label className="form-label">Do you have a registered business (SSM)?</label>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="hasBusiness" 
                            value="Yes" 
                            onChange={() => setHasBusiness(true)} 
                            required 
                        />
                        <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="hasBusiness" 
                            value="No" 
                            onChange={() => setHasBusiness(false)} 
                            required 
                        />
                        <label className="form-check-label">No</label>
                    </div>
                </div>

                {/* Business Details Form - Only visible if "Yes" is selected */}
                {hasBusiness && (
                    <div id="businessDetails">
                        <div className="mb-3">
                            <label htmlFor="industry" className="form-label">Industry</label>
                            <select className="form-select" id="industry" name="industry">
                                <option value="" disabled>Select Industry</option>
                                <option value="Retail">Retail</option>
                                <option value="Technology">Technology</option>
                            </select>
                        </div>
                        {/* More fields for business details... */}
                    </div>
                )}

                <button type="submit" className="btn btn-primary w-100">Next</button>
            </form>
        </div>
    );
};

export default BusinessDetailsForm;
