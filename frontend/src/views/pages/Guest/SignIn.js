import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import { appendFormData } from '../../../libs/FormInput';
import { Navigate } from 'react-router-dom';
import useStore from '../../../store';
import loginIllustration from '../../../assets/login.png';
import './SignIn.css';

function SignIn() {
  const store = useStore(); // Zustand store management
  const url = process.env.REACT_APP_API_URL; // API server URL
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    store.emptyData(); // Clear all previous data
    store.setValue('authenticated', false); // Set authenticated to false
  }, []);

  // handle form submission
  const handleSubmit = (e) => {
    store.setValue('errors', null); // Reset errors when form is submitting
    setIsLoading(true);
    e.preventDefault();

    const formData = new FormData();
    const dataArray = [
      { key: 'email', value: store.getValue('email') },
      { key: 'password', value: store.getValue('password') },
    ];
    appendFormData(formData, dataArray);

    axios({
      method: 'post',
      url: `${url}/login`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        localStorage.setItem('token', response.data.token); // Store token
        localStorage.setItem('role', response.data.role); // Store user role
        store.setValue('authenticated', true); // Mark as authenticated
      })
      .catch((error) => {
        if (error.response?.status === 422) {
          store.setValue('errors', error.response.data.errors); // Set validation errors in Zustand
        }
        if (error?.message) {
          setMessageType('danger');
          setMessage(error.message);
        }
      })
      .finally(() => setIsLoading(false));
  };

  // Redirect after login based on user role
  if (store.getValue('authenticated') === true) {
    const role = localStorage.getItem('role'); // Get the user role
    switch (role) {
      case 'system':
        return <Navigate to="/system/home" replace />;
      case 'admin':
        return <Navigate to="/admin/home" replace />;
      case 'user':
        return <Navigate to="/user/home" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section */}
        <div className="left-section">
          <img src={loginIllustration} alt="Illustration" className="illustration" />
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>Welcome Back!</h2>
          <p>Log in to access your personalized business recommendations.</p>

          <form className="login-form" onSubmit={handleSubmit}>
            {message && <Alert variant={messageType}>{message}</Alert>}

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                onChange={(e) => store.setValue('email', e.target.value)}
                disabled={isLoading}
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={(e) => store.setValue('password', e.target.value)}
                disabled={isLoading}
              />
            </label>

            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            <div className="signup-link">
              Don’t have an account? <a href="/signup">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;