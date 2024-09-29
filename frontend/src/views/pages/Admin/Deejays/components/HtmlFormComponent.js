import React, {  } from 'react'
import { InputText,InputFile, InputRadio, InputDate } from '../../../../../libs/FormInput';
import { Form,Row,Col, Image, Figure, FormGroup } from 'react-bootstrap';
import useStore from '../../../../../store'

const HtmlFormComponent = ({isLoading}) => {
    const store = useStore();
    const url = process.env.REACT_APP_SERVER_URL; 
    return (
        <>
 
            <h5>Deejay</h5>
            <Col className='mb-2'>
                <InputText 
                    fieldName='title' 
                    placeholder='Name'  
                    icon='fa-solid fa-user'
                    isLoading={isLoading}
                />

            </Col>
            
            <Col className='mb-2'>
                <InputText 
                    fieldName='description' 
                    placeholder='Profile'  
                    icon='fa-solid fa-clipboard'
                    isLoading={isLoading}
                />

            </Col>
            
            <hr />
            <h5>Photo</h5>
            <Col className='mb-2'>
                {store.getValue('filename') ? 

                    <Figure>
                        <Figure.Image
                            className='img-fluid'
                            src={`${url}/storage/deejays/${store.getValue('filename')}`}
                        />
                    </Figure>
                          
                :
                    <InputFile
                        fieldName='photo' 
                        placeholder='Choose deejay'  
                        icon='fa-solid fa-image'
                        isLoading={isLoading}
                    />
                }
            </Col>
        
        </>
    );
};

export default HtmlFormComponent;