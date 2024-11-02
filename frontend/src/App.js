import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './libs/ProtectedRoute'; // only logged user 

// Master Layout based on Role
import GuestLayout from './views/layouts/GuestLayout/GuestLayout';
import HomeLayout from './views/layouts/HomeLayout/HomeLayout';
import UserLayout from './views/layouts/UserLayout/UserLayout';
import AdminLayout from './views/layouts/AdminLayout/AdminLayout';


// role = guest
import LoginPage from './views/pages/LoginPage';
import DashboardPage from './views/pages/User/DashboardPage';


// role=User
import UserHomePage from './views/pages/User/Home';
import UserProfile from './views/pages/User/UserProfile' // UserProfile Module

// role=Admin
import AdminHomePage from './views/pages/Admin/Home';
import UserManagement from './views/pages/Admin/Users';


// Profile
import Profile from './views/pages/Global/Profile';


import Home from './views/pages/Home/Home';
import ContentPage from './views/pages/Content/content';
import FooterPage from './views/pages/Content/footer';


import AboutUs from './views/pages/Guest/AboutUs';
import SignIn from './views/pages/Guest/SignIn';
import Register from './views/pages/Guest/Register';
import ContactUs from './views/pages/Guest/ContactUs';
import SignOut from './views/pages/Guest/SignOut';


import './App.css';


function App() {
  return (
    <Router>
      <Routes>

        {/* Home Layout */ }
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contents/:id" element={<ContentPage />} />
          <Route path="/footers/:id" element={<FooterPage />} />

        </Route>
        
        {/* Guest */}
        <Route element={<GuestLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LoginPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* User */}
        <Route element={<ProtectedRoute role={'user'} />}>
          <Route element={<UserLayout />}>
            <Route path="/user/home" element={<UserHomePage />} />
            <Route path="/user/user_profile" element={<UserProfile />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/dashboard" element={<DashboardPage />} />
            <Route path="/user/sign-out" element={<SignOut />} />
          </Route>  
        </Route>

        {/* Admin */}
        <Route element={<ProtectedRoute role={'admin'} />}>`
          <Route element={<AdminLayout />}>`
            <Route path="/admin/home" element={<AdminHomePage />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/sign-out" element={<SignOut />} />
          </Route>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
