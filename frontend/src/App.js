import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './libs/ProtectedRoute';

import GuestLayout from './views/layouts/GuestLayout';
import UserLayout from './views/layouts/UserLayout';
import AdminLayout from './views/layouts/AdminLayout';

import HomePage from './views/pages/HomePage';
import LoginPage from './views/pages/LoginPage';
import DashboardPage from './views/pages/DashboardPage';
import AdminPage from './views/pages/AdminPage';

import './App.css'
import AboutUs from './views/pages/Guest/AboutUs';
import SignIn from './views/pages/Guest/SignIn';
import Register from './views/pages/Guest/Register';
import ContactUs from './views/pages/Guest/ContactUs';
import SignOut from './views/pages/Guest/SignOut';

function App() {
  return (
    <Router>
      <Routes>
        {/* Guest Layout */}
        <Route element={<GuestLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LoginPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* User Layout */}
       
        <Route element={<ProtectedRoute role={'user'} />}>
          <Route element={<UserLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/sign-out" element={<SignOut />} />
          </Route>  
        </Route>

        {/* Admin Layout */}
       
        <Route element={<ProtectedRoute role={'admin'} />}>`
          <Route element={<AdminLayout />}>`
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Route>  
      </Routes>
    </Router>
  );
}

export default App;
