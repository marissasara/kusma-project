// GuestLayout.js
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <h1>Admin Layout</h1>
      <Outlet /> {/* This renders the nested routes */}
    </div>
  );
};

export default AdminLayout;
