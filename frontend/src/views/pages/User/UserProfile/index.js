import React from 'react';
import HtmlFormComponent from './components/HtmlFormComponent';
import { Row } from 'react-bootstrap';

const index = () => {
    return (
        <Row className='col-8'>
            <h2>Your Profile</h2>
            <HtmlFormComponent />
        </Row>
    );
};

export default index;