// GuestLayout.js
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Logo from './nasional-fm.png';
import Podcast from './rtm-podcast-icon.png';

const HomeLayout = () => {
  return (
    <>
    <nav className="navbar" style={{
                                'minHeight': '100px',
                                'backgroundColor': 'lightcyan'
                              }}>
      <span className="navbar-brand mb-0 h1 ms-4">
        <img src={Logo} alt="Logo NasionalFM" height="60" className="d-inline-block align-text-top"  />
      </span>

      <span className="d-none d-sm-flex">
        <img src={Podcast} alt="Podscast" height="60" className="d-inline-block align-text-top me-2"  />
      </span>
   
    </nav>

    <div className="container-fluid row overflow-auto">
      
      <div className="col d-flex flex-column h-sm-100 mb-2 mt-4">
          <Outlet />
          <Footer />
      </div>
  </div>
</>
  );
};

export default HomeLayout;
