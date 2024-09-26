import { useState, useEffect } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import axios from '../../../libs/axios';
import useStore from '../../../store';
import { appendFormData, InputText } from '../../../libs/FormInput';
import { Navigate,Link } from 'react-router-dom'

function SignOut() {
    const store = useStore(); // zustand store management
    const url = process.env.REACT_APP_API_URL; // API server
    const [isLoading, setIsLoading] = useState(false);
   
    useEffect(() => {
        setIsLoading(true)
        // Code to run when the component is loaded (similar to window.onload)
        console.log("Page has loaded!");

        // Zustand presets
        store.emptyData() // clear all previous data
        
        // Request logging out from Laravel
        axios({
            method: 'post',
            url: `${url}/logout`,
        })
        .then(response => {
            console.log(response);
        
            localStorage.removeItem('token') // token to be used with axios interceptor
            store.setValue('authenticated', false)
            
        })
        .catch(error => {
            console.warn(error)
        })
        .finally( () => {
            setIsLoading(false)
        })

        // Optionally, you can return a cleanup function to run when the component is unmounted
        return () => {
            console.log("Component is unmounting!");
        };
    }, []); // Empty dependency array means this runs only once, when the component loads



    // handle redirect after login
    if( store.getValue('authenticated') === false) {
        return <Navigate to='/sign-in' replace />
    }

    return (
        <Row className='ms-4 col-8 border border-1 p-4 rounded'  style={{ backgroundColor: isLoading ? '#eaeaea' : 'transparent' }} >
            <h1>Sign Out</h1>
        </Row>
    );
}

export default SignOut;
