// GuestLayout.js
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Footer from '../Global/Footer';

const GuestLayout = () => {
  return (
    <div class="container-fluid overflow-hidden" id="root">
      <div class="row vh-100 overflow-auto">
          <SideBar />  
          <div class="col d-flex flex-column h-sm-100">
              <main class="row overflow-auto">
                  <div class="col pt-4">
                      <Outlet />
                  </div>
              </main>
              <Footer />
          </div>
      </div>
    </div>
  );
};

export default GuestLayout;
