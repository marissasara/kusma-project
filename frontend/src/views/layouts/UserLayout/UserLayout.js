// GuestLayout.js
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Footer from '../Global/Footer';

const UserLayout = () => {
  return (
    <div className="container-fluid overflow-hidden" id="root">
      <div className="row vh-100 overflow-auto">
        <SideBar />  
        <div className="col d-flex flex-column h-sm-100">
            <main className="row overflow-auto">
                <div className="col pt-4">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
      </div>
  </div>
  );
};

export default UserLayout;
