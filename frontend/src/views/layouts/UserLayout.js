// GuestLayout.js
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar/UserSideBar';
import Footer from './Footer';

const GuestLayout = () => {
  return (
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
  );
};

export default GuestLayout;
