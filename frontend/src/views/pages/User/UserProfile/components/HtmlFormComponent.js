import React, { useEffect } from 'react';
import { InputText  } from '../../../../../libs/FormInput';
import { Col, Row, Button, Spinner } from 'react-bootstrap';
import useStore from '../../../../../store';
import FetchData from './FetchData';
import SendData from './SendData';


const HtmlFormComponent = () => {
    const store = useStore();
    const url = process.env.REACT_APP_SERVER_URL; 

    // run when page loaded
    useEffect( () => {
        store.setValue('is_loading', false ) // initial value
        store.setValue('errors', null ) // initial value
        
        FetchData({store}); // fetch data component

        // Optionally, you can return a cleanup function to run when the component is unmounted
        return () => {
            console.log("Component is unmounting!");
        };
    },[])

    // when user click submit
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
                        isLoading={store.getValue('is_loading')}
                    />
                </Col>
            </Row>

            <Row>
                <Col className='mb-2'>
                    <InputText 
                        fieldName='name' 
                        placeholder='Your name'  // follow fieldname in user_profiles table
                        icon='fa-solid fa-pencil'
                        isLoading={store.getValue('is_loading')}
                    />
                </Col>
            </Row>

            <Row className='mt-2'>
                <Col>
                    <Button
                        disabled={store.getValue('is_loading')} 
                        onClick={() => handleSubmitButton()}
                    >
                        {store.getValue('is_loading') ? (
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    className="me-2"
                                />
                                Loading...
                            </>
                        ) : (
                            'Save'
                        )}
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default HtmlFormComponent;