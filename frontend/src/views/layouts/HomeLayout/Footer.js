import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import ksn_logo from './ksn2.png';
import mampu_logo from './mampu.png';
import mygov_logo from './mygov2.png';
import msc_logo from './msc-white.png';
import apps_logo from './apps.png';
import play_logo from './googleplay-bm.png';
import huawei_logo from './huawei_appsgaleryedit1.png';
import facebook_logo from './fblogowhite.png';
import x_logo from './logowhite.png';
import AddressComponent from './FooterComponent/AddressComponent';
const Footer = () => {
    return (
   

    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
    {/* Section: Social media */}
    <section className="d-flex justify-content-between p-4" id="example2">
      {/* Left */}
      <div className="me-5">
        <span></span>
      </div>
      {/* Left */}

      {/* Right */}
      <div>
        <a href="https://www.facebook.com/NASIONALfmRTM" className="text-white me-4">
          <img src={facebook_logo} alt="Facebook" className="img-fluid" />
        </a>
        <a href="https://x.com/nasionalfm_my?lang=en" className="text-white me-4">
          <img src={x_logo} alt="Twitter" className="img-fluid" />
        </a>
        <a href="https://www.instagram.com/nasionalfm_malaysia/" className="text-white me-4">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@nasionalfm?lang=en" className="text-white me-4">
          <i className="bi bi-tiktok"></i>
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}

    {/* Section: Links  */}
    <section>
      <div className="container text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-4">
            <AddressComponent />
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold"></h6>
            <p><a href="http://www.rtm.gov.my/" className="text-white">RTM</a></p>
            <p><a href="https://rtmklik.rtm.gov.my/" className="text-white">RTMKLIK</a></p>
            <p><a href="https://radio.rtm.gov.my/" className="text-white">STESEN RADIO KAMI</a></p>
            <p><a href="https://podcast.rtm.gov.my/" className="text-white">PODCAST RTM</a></p>
            <hr id="footercolorhr" />
            <p><a href="#!" className="text-white">PENAFIAN</a></p>
            <p><a href="#!" className="text-white">POLISI PRIVASI</a></p>
            <p><a href="#!" className="text-white">POLISI KESELAMATAN</a></p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-12 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold"></h6>
            <p><a href="#!" className="text-white">PENGIKLANAN</a></p>
            <p><a href="#!" className="text-white">FREKUENSI</a></p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}

    {/* Copyright */}
    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      Hak Cipta Terpelihara © 2024, Radio Televisyen Malaysia.
    </div>
    {/* Copyright */}
  </footer>


    );
};

export default Footer;