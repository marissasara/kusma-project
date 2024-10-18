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
const Footer = () => {
    return (
    // <footer className="mt-4 py-4 text-dark rounded" style={{'backgroundColor' : 'lightcyan'}}>
    //     <div className="col">
    //         <SocialMediaIcons />
    //     </div>
    // </footer>
    
    // <footer className="mt-4 mb-4 ms-1 text-light rounded" style={{'backgroundColor': '#103053 '}}>
   
    //         <div className="row justify-content-center p-5 ms-5">

    //             <div className="col-3">
    //                 <ul className='list-unstyled'>
    //                     <li className='mb-2'><a href="http://www.mampu.gov.my/ms/"><img className="img-fluid" src={mampu_logo} alt="Mampu Logo" /></a></li>
    //                     <li className='mb-2'><a href="https://www.malaysia.gov.my/portal/index"><img className="img-fluid" src={mygov_logo} alt="MyGov Logo" /></a></li>
    //                     <li className='mb-2'><a href="#"><img className="img-fluid" src={ksn_logo} alt="KSN Logo" /></a></li>
    //                     <li><a href="#"><img className="img-fluid" src={msc_logo} alt="MSC Logo" /></a></li>
    //                 </ul>
    //             </div>

                
    //             <div className="col-3">
    //                 <ul className='list-unstyled'>
    //                     <li><a className="text-light" href="http://www.mampu.gov.my/ms/">Dasar Keselamatan</a></li>
    //                     <li><a className="text-light" href="http://www.mampu.gov.my/ms/">Dasar Privasi</a></li>
    //                     <li><a className="text-light" href="http://www.mampu.gov.my/ms/">Latar Belakang</a></li>
    //                     <li><a className="text-light" href="http://www.mampu.gov.my/ms/">Mengenai Kami</a></li>

    //                 </ul>
    //             </div>


    

    //             <div className="col-3">
    //                 <p>Radio Televisyen Malaysia<br />
    //                     Angkasapuri Kota Media<br />
    //                     50614 Kuala Lumpur</p>
    //                 <p>aduan [at] rtm.gov.my </p>
    //                 <p> Tel: 03 - 2282 5333 </p>
    //                 <p> Faks: 03 - 2284 7591 </p>
    //             </div>

    //             <div className="col-3 text-center ">
    //                 <ul className="list-unstyled ">
    //                     <li className='mb-2'><a href="https://apps.apple.com/my/app/rtmklik/id777391399"><img className="img-fluid" src={apps_logo} alt="Apple App Store Logo" /></a></li>
    //                     <li className='mb-2'><a href="https://play.google.com/store/apps/details?id=my.gov.rtm.mobile"><img className="img-fluid" src={play_logo} alt="Google Play Store Logo" /></a></li>
    //                     <li className='mb-1'><a href="https://appgallery.huawei.com/app/C101841473"><img className="img-fluid" src={huawei_logo} alt="Huawei AppGallery Logo" /></a></li>
    //                 </ul>
    //             </div>
          
    //     </div>

    //     <div className="container">
    //         <div className="row">
    //             <div className="col-md-12 d-flex justify-content-center">
    //                 <p style={{ marginTop: "0.5rem" }}>Hak Cipta Terpelihara @ {new Date().getFullYear()} RADIO TELEVISYEN MALAYSIA</p>
    //             </div>
    //         </div>
    //     </div>
    // </footer>

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
            <h6 className="text-uppercase fw-bold">NASIONALFM</h6>
            <hr id="footercolorhr" />
            <p><i className="bi bi-geo-alt mr-3"></i>Aras 3 Selatan, Wisma Radio, 50740 Angkasapuri Kota Media, Kuala Lumpur</p>
            <p><i className="bi bi-envelope mr-3"></i> nasionalfm@rtm.gov.my</p>
            <p><i className="bi bi-telephone mr-3"></i> +603 2282 7829</p>
            <p><i className="bi bi-telephone mr-3"></i> +603 2284 7594</p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold"></h6>
            <p><a href="http://www.rtm.gov.my/" className="text-white">RTM</a></p>
            <p><a href="https://rtmklik.rtm.gov.my/" className="text-white">RTMKLIK</a></p>
            <p><a href="https://radio.rtm.gov.my/" className="text-white">STESEN RADIO KAMI</a></p>
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