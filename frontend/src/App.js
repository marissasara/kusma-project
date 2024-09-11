import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestLayout from './views/layouts/GuestLayout';
import UserLayout from './views/layouts/UserLayout';
import AdminLayout from './views/layouts/AdminLayout';

import HomePage from './views/pages/HomePage';
import LoginPage from './views/pages/LoginPage';
import DashboardPage from './views/pages/DashboardPage';
import AdminPage from './views/pages/AdminPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Guest Layout */}
        <Route element={<GuestLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* User Layout */}
        <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

        {/* Admin Layout */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
