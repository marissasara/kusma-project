// GuestLayout.js
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div>
      <h1>User Layout</h1>
      <Outlet /> {/* This renders the nested routes */}
    </div>
  );
};

export default UserLayout;
