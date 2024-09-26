import { useState, useEffect } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import useStore from '../../../store';
import { appendFormData, InputText } from '../../../libs/FormInput';
function Register() {
    const store = useStore()

    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    useEffect(() => {
        // Code to run when the component is loaded (similar to window.onload)
        console.log("Page has loaded!");
        store.emptyData() // clear all previous data

        // Optionally, you can return a cleanup function to run when the component is unmounted
        return () => {
            console.log("Component is unmounting!");
        };
    }, []); // Empty dependency array means this runs only once, when the component loads


    const handleSubmit = (e) => {
        e.preventDefault();
        
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
            url: 'http://localhost:8000/api/frontend/register',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(response => {
            console.log(response);
            console.log('Form submitted successfully!');
        })
        .catch(error => {
   

            if( error.response?.status == 422 ){ // detect 422 errors by Laravel
                console.log(error.response.data.errors)
                store.setValue('errors', error.response.data.errors ) // set the errors to store
            }
        });
    };

    return (
        <Row className='ms-4 col-8 border border-1 p-4 rounded'>
        <h1>Register</h1>
        <Form onSubmit={handleSubmit}>

            <Row>
                <Row className='mb-4'>
               
                    <InputText 
                        fieldName='name' 
                        placeholder='Your name'  
                        icon='bi-people'
                        isLoading={isLoading}
                    />
                </Row>

                <Row className='mb-4'>
                    <InputText 
                        type='text'
                        fieldName='email' 
                        placeholder='Valid email address'  
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

                <Row className='mb-4'>
                    <InputText 
                        type='password'
                        password='password_confirmation'
                        fieldName='password_confirmation' 
                        placeholder='Confirm Password'  
                        icon='bi-lock'
                        isLoading={isLoading}
                    />
                </Row>
            </Row>

            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        </Row>
    );
}

export default Register;
