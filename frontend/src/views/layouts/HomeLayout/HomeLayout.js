// GuestLayout.js
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Logo from './nasional-fm.png';
import Podcast from './rtm-podcast-icon.png';
import { useEffect } from 'react';
import './style.css';

const HomeLayout = () => {


  useEffect(() => {
    // Apply background color to the body element
    document.body.style.backgroundColor = '#eeeeee';

    // Cleanup when the component unmounts (optional)
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);


  return (
    <>

    <nav className="navbar" style={{
                                'minHeight': '100px',
                                'backgroundColor': '#103053'
                              }}>
      <span className="navbar-brand mb-0 h1 ms-4">
        <img src={Logo} alt="Logo NasionalFM" height="60" className="d-inline-block align-text-top"  />
      </span>

      <span className="d-none d-sm-flex">
        <img src={Podcast} alt="Podscast" height="60" className="d-inline-block align-text-top me-2"  />
      </span>
   
    </nav>

    <div className="container-fluid row overflow-auto colorcontainerkelabu">
      

      <div className="col d-flex flex-column h-sm-100 mb-2 mt-4">
          <Outlet />
          <Footer />
      </div>
  </div>
</>
  );
};

export default HomeLayout;
