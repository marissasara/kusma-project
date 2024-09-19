import { useState, useEffect } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import useStore from '../../../store';
import { appendFormData, InputText } from '../../../FormInput';
import { Navigate,Link } from 'react-router-dom'

function SignIn() {
    const store = useStore()
    
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState('');
    

    useEffect(() => {
        // Code to run when the component is loaded (similar to window.onload)
        console.log("Page has loaded!");

        // Zustand presets
        store.emptyData() // clear all previous data
        store.setValue('authenticated', false) // set authenticated to false

        // Optionally, you can return a cleanup function to run when the component is unmounted
        return () => {
            console.log("Component is unmounting!");
        };
    }, []); // Empty dependency array means this runs only once, when the component loads


    // handle form submission
    const handleSubmit = (e) => {
        store.setValue('errors', null ) // reset the error when form is submitting
        setIsLoading(true)
        e.preventDefault();
        
        const formData = new FormData();
        const dataArray = [
    
            { key: 'email', value: store.getValue('email') }, 
            { key: 'password', value: store.getValue('password') }, 
      
        ];
        
        appendFormData(formData, dataArray);


        axios({
            method: 'post',
            url: 'http://localhost:8000/api/login',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            console.log(response);
            store.setValue('authenticated', true)
            console.log('Form submitted successfully!');
        })
        .catch(error => {
            if( error.response?.status == 422 ){ // detect 422 errors by Laravel
                console.log(error.response.data.errors)
                store.setValue('errors', error.response.data.errors ) // set the errors to store
            }
        })
        .finally( () => {
            setIsLoading(false)
        })
    };

    // handle redirect after login
    // if( store.getValue('authenticated') === true) {
    //     return <Navigate to='/dashboard' replace />
    // }

    return (
        <Row className='ms-4 col-8 border border-1 p-4 rounded'  style={{ backgroundColor: isLoading ? '#eaeaea' : 'transparent' }} >
        <h1>Sign In {store.getValue('authenticated') ? 'auth' : 'false'}</h1>
        <Form onSubmit={handleSubmit}>

            <Row>
                <Row className='mb-4'>
                    <InputText 
                        type='text'
                        fieldName='email' 
                        placeholder='Your email address'  
                        icon='bi-envelope'
                        isLoading={isLoading}
                    />
                </Row>

                <Row className='mb-4'>
                    <InputText 
                        type='password'
                        fieldName='password' 
                        placeholder='Password'  
                        icon='bi-lock'
                        isLoading={isLoading}
                    />
                </Row>

              
            </Row>

            <Button disabled={isLoading} variant="primary" type="submit">
            {isLoading ? 'loading...' : 'Submit'}
            </Button>
        </Form>
        </Row>
    );
}

export default SignIn;
