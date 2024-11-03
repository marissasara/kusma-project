// EducationLoan.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './eduloan.css';

const EducationLoan = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/display_recomm'); // Replace with the actual route for your recommendations page
    };

    return (
        <div className="container mt-5">
            <h1>Education & Loan Preferences</h1>
            <h5>Complete your education details and loan preferences to get the best options</h5>

            {/* Progress Bar */}
            <div className="progress my-4">
                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>Step 3 of 3: Education & Loan Preferences</p>

            <form onSubmit={handleSubmit}>
                {/* Education Type */}
                <div className="mb-3">
                    <label htmlFor="educationType" className="form-label">Education Type</label>
                    <select className="form-select" id="educationType" name="educationType" required>
                        <option value="" disabled>Select Education Type</option>
                        <option value="Still Studying">Still Studying</option>
                        <option value="Graduated">Graduated</option>
                    </select>
                </div>

                {/* Certification Level */}
                <div className="mb-3">
                    <label htmlFor="certificationLevel" className="form-label">Certification Level</label>
                    <select className="form-select" id="certificationLevel" name="certificationLevel" required>
                        <option value="" disabled>Select Certification Level</option>
                        <option value="SPM / SKM">SPM / SKM</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Degree">Degree</option>
                        <option value="Master / PhD">Master / PhD</option>
                    </select>
                </div>

                {/* Loan Amount Preference */}
                <div className="mb-3">
                    <label htmlFor="loanAmount" className="form-label">Loan Amount Preference</label>
                    <select className="form-select" id="loanAmount" name="loanAmount" required>
                        <option value="" disabled>Select Loan Amount</option>
                        <option value="1K - 10K">1K - 10K</option>
                        <option value="10K - 50K">10K - 50K</option>
                        <option value="50K - 100K">50K - 100K</option>
                        <option value="100K - 150K">100K - 150K</option>
                        <option value="150K - 250K">150K - 250K</option>
                        <option value="250K - 500K">250K - 500K</option>
                        <option value="500K - 1M">500K - 1M</option>
                        <option value="1M+">1M+</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    );
};

export default EducationLoan;
