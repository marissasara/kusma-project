import { useState, useEffect } from 'react';
import { Row, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import useStore from '../../../store';
import { appendFormData, InputText } from '../../../libs/FormInput';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../../libs/SubmitButton';
import illustration from '../../../assets/signup.png';
import './Register.css';

function Register() {
    const navigate = useNavigate();
    const store = useStore(); // zustand store management
    const url = process.env.REACT_APP_API_URL; // API server
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Code to run when the component is loaded (similar to window.onload)
        console.log("Page has loaded!");
        store.emptyData() // clear all previous data
        store.setValue('registered', false ) // init

        // Optionally, you can return a cleanup function to run when the component is unmounted
        return () => {
            console.log("Component is unmounting!");
        };
    }, []); // Empty dependency array means this runs only once, when the component loads


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        
        const formData = new FormData();
        const dataArray = [
            { key: 'name', value: store.getValue('name') },
            { key: 'email', value: store.getValue('email') }, 
            { key: 'password', value: store.getValue('password') }, 
            { key: 'password_confirmation', value: store.getValue('password_confirmation') },
        ];
        
        appendFormData(formData, dataArray);

        axios({
            method: 'post',
            //url: 'http://localhost:8000/api/frontend/register',
            url: `${url}/frontend/register`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            console.log(response);
            console.log('Form submitted successfully!');
            store.setValue('registered', true) // for redirect purpose
        })
        .catch(error => {
            if( error.response?.status == 422 ){ // detect 422 errors by Laravel
                console.log(error.response.data.errors)
                store.setValue('errors', error.response.data.errors ) // set the errors to store
            }
        })
        .finally(() => {
            setIsLoading(false)
        })
    };


    useEffect( () => {
        // handle redirect after successful registration
        if (store.getValue('registered') === true) {
            navigate('/sign-in', { replace: true });
        }
    }, [store.getValue('registered')])


    return (
        <div className="register-page">
            <div className="register-container">
                {/* Left Section */}
                <div className="left-section">
                    <img src={illustration} alt="Progress illustration" className="illustration" />
                </div>

                {/* Right Section */}
                <div className="right-section">
                   
                    
                    <h4>Sign up for Free</h4>
                    <p>Create Your Account and Unlock Personalized Guidance</p>
                    
                    <form className="register-form" onSubmit={handleSubmit}>
                        <label>
                            Name
                            <input
                                type="text"
                                name="name"
                                required
                                onChange={(e) => store.setValue('name', e.target.value)}
                                disabled={isLoading}
                            />
                        </label>
                        
                        <label>
                            Email
                            <input
                                type="email"
                                name="email"
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
                                required
                                onChange={(e) => store.setValue('password', e.target.value)}
                                disabled={isLoading}
                            />
                        </label>
                        
                        <label>
                            Confirm Password
                            <input
                                type="password"
                                name="confirmPassword"
                                required
                                onChange={(e) => store.setValue('password_confirmation', e.target.value)}
                                disabled={isLoading}
                            />
                        </label>
                        
                        <SubmitButton isLoading={isLoading} value="Register" />
                        
                        <p className="login-link">
                            Already have an account? <a href="/login">Login</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
