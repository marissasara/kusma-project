// GuestLayout.js
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar/GuestSideBar';
import Footer from './Footer';
import Logo from './nasional-fm.png';
import Podcast from './rtm-podcast-icon.svg';

const GuestLayout = () => {
  return (
    <>
    <nav class="navbar" style={{
                                'minHeight': '100px',
                                'backgroundColor': 'lightcyan'
                              }}>
      <span class="navbar-brand mb-0 h1 ms-4">
        <img src={Logo} alt="Logo" height="60" className="d-inline-block align-text-top"  />
      </span>

      <span>
        <img src={Podcast} alt="Podscast" height="60" className="d-inline-block align-text-top me-2"  />
      </span>
   
    </nav>

    <div class="container-fluid row overflow-auto">
      
      <div class="col d-flex flex-column h-sm-100">
          <main class="row overflow-auto mb-4">
              <div class="col pt-4">
                  <Outlet />
              </div>
          </main>
          <Footer />
      </div>
  </div>
</>
  );
};

export default GuestLayout;
