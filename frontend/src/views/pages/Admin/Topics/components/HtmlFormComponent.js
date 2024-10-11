import React, {  } from 'react'
import { InputText,InputFile, InputRadio, InputDate, InputTextarea } from '../../../../../libs/FormInput';
import { Form,Row,Col, Image, Figure, FormGroup } from 'react-bootstrap';
import useStore from '../../../../../store'

const HtmlFormComponent = ({isLoading}) => {
    const store = useStore();
    const url = process.env.REACT_APP_SERVER_URL; 
    return (
        <>
 
            <h5>Topic</h5>
            <Col className='mb-2'>
                <InputText
                    fieldName='title' 
                    placeholder='Title'  
                    icon='fa-solid fa-pencil'
           
                    isLoading={isLoading}
                />

            </Col>
            
            <Col className='mb-2'>
                <InputTextarea
                    fieldName='description' 
                    placeholder='Description'  
                    icon='fa-solid fa-clipboard'
                    rows={'10'}
                    isLoading={isLoading}
                />

            </Col>
            
          
        
        </>
    );
};

export default HtmlFormComponent;