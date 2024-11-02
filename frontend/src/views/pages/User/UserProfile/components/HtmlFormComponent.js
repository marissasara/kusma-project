import React, { useEffect } from 'react';
import { InputText  } from '../../../../../libs/FormInput';
import { Col, Row, Button } from 'react-bootstrap';
import useStore from '../../../../../store';
import FetchData from './FetchData';
import SendData from './SendData';


const HtmlFormComponent = ({isLoading}) => {
    const store = useStore();
    const url = process.env.REACT_APP_SERVER_URL; 

    // run when page loaded
    useEffect( () => {
        FetchData(); // fetch data component

        // Optionally, you can return a cleanup function to run when the component is unmounted
        return () => {
            console.log("Component is unmounting!");
        };
    },[])

    const handleSubmitButton = () => {
        console.log('submitted')
        SendData({store}); // send data component
    }


    return (
        <>
            <Row>
                <Col className='mb-2'>
                    <InputText 
                        fieldName='title' // follow fieldname in user_profiles table
                        placeholder='Your title'  
                        icon='fa-solid fa-pencil'
                        isLoading={isLoading}
                    />
                </Col>
            </Row>

            <Row>
                <Col className='mb-2'>
                    <InputText 
                        fieldName='name' 
                        placeholder='Your name'  // follow fieldname in user_profiles table
                        icon='fa-solid fa-pencil'
                        isLoading={isLoading}
                    />
                </Col>
            </Row>

            <Row className='mt-2'>
                <Col>
                    <Button onClick={ () => handleSubmitButton() }>Save</Button>
                </Col>
            </Row>
        </>
    );
};

export default HtmlFormComponent;