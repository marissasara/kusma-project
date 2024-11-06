import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import maraImage from './../../../assets/mara.png';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="heading">Congratulations! All Programs Unlocked</h1>

      {/* Alert for subscription success */}
      <div className="alert alert-success">
        <strong>Success:</strong> Your subscription is active. You now have full access to all KUSMA programs.
      </div>

      <div className="row">
        {/* Program Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
          <img src={maraImage} className="card-img-top" alt="MARA Program - PUTRA" />

            <div className="card-body">
              <h5 className="card-title">Program Usahawan Lepasan Institut MARA / Belia - MARA</h5>
              <p className="card-text">PUTRA helps young entrepreneurs build foundational business skills with workshops and grants. Explore it now!</p>
              <a href="#" className="btn btn-primary w-100">Learn More</a>
            </div>
          </div>
        </div>

        {/* Program Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={maraImage} className="card-img-top" alt="MARA Program - SEMAI" />
            <div className="card-body">
              <h5 className="card-title">SEMAI - MARA</h5>
              <p className="card-text">SEMAI is designed to offer financing for emerging agricultural businesses. Gain full access and boost your venture!</p>
              <a href="#" className="btn btn-primary w-100">Learn More</a>
            </div>
          </div>
        </div>

        {/* Program Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src= {maraImage} className="card-img-top" alt="MARA Program - DANA NITA" />
            <div className="card-body">
              <h5 className="card-title">DANA NITA - MARA</h5>
              <p className="card-text">DANA NITA offers accessible financing options for women entrepreneurs to kick-start their businesses.</p>
              <a href="#" className="btn btn-primary w-100">Learn More</a>
            </div>
          </div>
        </div>

        {/* Program Card 4 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src= {maraImage} className="card-img-top" alt="TEKUN Program - PEMBIAYAAN KECIL" />
            <div className="card-body">
              <h5 className="card-title">PEMBIAYAAN KECIL - TEKUN</h5>
              <p className="card-text">PEMBIAYAAN KECIL offers micro-financing for small-scale businesses. Secure funds to grow your business today.</p>
              <a href="#" className="btn btn-primary w-100">Learn More</a>
            </div>
          </div>
        </div>

        {/* Program Card 5 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={maraImage} className="card-img-top" alt="TEKUN Program - SPUMI" />
            <div className="card-body">
              <h5 className="card-title">SPUMI - TEKUN</h5>
              <p className="card-text">The SPUMI program is specially designed for Indian entrepreneurs to access financing and support services.</p>
              <a href="#" className="btn btn-primary w-100">Learn More</a>
            </div>
          </div>
        </div>

        {/* Program Card 6 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={maraImage} className="card-img-top" alt="New Program" />
            <div className="card-body">
              <h5 className="card-title">New Program</h5>
              <p className="card-text">This new program offers unique opportunities for innovative entrepreneurs looking to expand.</p>
              <a href="#" className="btn btn-primary w-100">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
