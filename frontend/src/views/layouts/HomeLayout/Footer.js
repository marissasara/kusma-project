import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import ksn_logo from './ksn2.png';
import mampu_logo from './mampu.png';
import mygov_logo from './mygov2.png';
import msc_logo from './msc-white.png';
import apps_logo from './apps.png';
import play_logo from './googleplay-bm.png';
import huawei_logo from './huawei_appsgaleryedit1.png';

const Footer = () => {
    return (
    // <footer className="mt-4 py-4 text-dark rounded" style={{'backgroundColor' : 'lightcyan'}}>
    //     <div className="col">
    //         <SocialMediaIcons />
    //     </div>
    // </footer>
    <footer className="mt-4 mb-4 ms-1 text-light rounded" style={{'backgroundColor': '#000'}}>
   
            <div className="row justify-content-center p-5 ms-5">

                <div className="col-3">
                    <ul className='list-unstyled'>
                        <li className='mb-2'><a href="http://www.mampu.gov.my/ms/"><img className="img-fluid" src={mampu_logo} alt="Mampu Logo" /></a></li>
                        <li className='mb-2'><a href="https://www.malaysia.gov.my/portal/index"><img className="img-fluid" src={mygov_logo} alt="MyGov Logo" /></a></li>
                        <li className='mb-2'><a href="#"><img className="img-fluid" src={ksn_logo} alt="KSN Logo" /></a></li>
                        <li><a href="#"><img className="img-fluid" src={msc_logo} alt="MSC Logo" /></a></li>
                    </ul>
                </div>

                
                <div className="col-3">
                    <ul className='list-unstyled'>
                        <li><a className="text-light" href="http://www.mampu.gov.my/ms/">Dasar Keselamatan</a></li>
                        <li><a className="text-light" href="http://www.mampu.gov.my/ms/">Dasar Privasi</a></li>
                        <li><a className="text-light" href="http://www.mampu.gov.my/ms/">Latar Belakang</a></li>
                        <li><a className="text-light" href="http://www.mampu.gov.my/ms/">Mengenai Kami</a></li>

                    </ul>
                </div>


    

                <div className="col-3">
                    <p>Radio Televisyen Malaysia<br />
                        Angkasapuri Kota Media<br />
                        50614 Kuala Lumpur</p>
                    <p>aduan [at] rtm.gov.my </p>
                    <p> Tel: 03 - 2282 5333 </p>
                    <p> Faks: 03 - 2284 7591 </p>
                </div>

                <div className="col-3 text-center ">
                    <ul className="list-unstyled ">
                        <li className='mb-2'><a href="https://apps.apple.com/my/app/rtmklik/id777391399"><img className="img-fluid" src={apps_logo} alt="Apple App Store Logo" /></a></li>
                        <li className='mb-2'><a href="https://play.google.com/store/apps/details?id=my.gov.rtm.mobile"><img className="img-fluid" src={play_logo} alt="Google Play Store Logo" /></a></li>
                        <li className='mb-1'><a href="https://appgallery.huawei.com/app/C101841473"><img className="img-fluid" src={huawei_logo} alt="Huawei AppGallery Logo" /></a></li>
                    </ul>
                </div>
          
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <p style={{ marginTop: "0.5rem" }}>Hak Cipta Terpelihara @ {new Date().getFullYear()} RADIO TELEVISYEN MALAYSIA</p>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;