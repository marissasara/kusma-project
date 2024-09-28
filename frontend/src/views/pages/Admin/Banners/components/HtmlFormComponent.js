import React, {  } from 'react'
import { InputText,InputFile, InputRadio, InputDate } from '../../../../../libs/FormInput';
import { Form,Row,Col, Image, Figure, FormGroup } from 'react-bootstrap';
import useStore from '../../../../../store'

const HtmlFormComponent = ({isLoading}) => {
    const store = useStore();
    const url = process.env.REACT_APP_SERVER_URL; 
    return (
        <>
            <Col className='mb-2'>
                <h5>Publishing</h5>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Start Date</Form.Label>
                            <InputDate icon='fa-calendar' fieldName='published_start' />
                        </Col>
                        <Col>
                            <Form.Label>End Date</Form.Label>
                            <InputDate  icon='fa-calendar' fieldName='published_end' />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className='col-4 mt-3'>
                    <InputRadio
                        fieldName='active' 
                        label='Is Active ?'
                        options={[
                        { label: 'Yes', value: 1 },
                        { label: 'No', value: 0 }
                        ]}
                        
                        />
                </Form.Group>    
            </Col>
            <hr />
            <h5>Metadata</h5>
            <Col className='mb-2'>
                <InputText 
                    fieldName='title' 
                    placeholder='Title'  
                    icon='fa-solid fa-pencil'
                    isLoading={isLoading}
                />

            </Col>
            
            <Col className='mb-2'>
                <InputText 
                    fieldName='description' 
                    placeholder='Short Description'  
                    icon='fa-solid fa-pencil'
                    isLoading={isLoading}
                />

            </Col>

  

            <Col className='mb-2'>
                <InputText 
                    fieldName='redirect_url' 
                    placeholder='URL'  
                    icon='fa-solid fa-share'
                    isLoading={isLoading}
                />
            </Col>
            
            <hr />
            <h5>Banner</h5>
            <Col className='mb-2'>
                {store.getValue('filename') ? 

                    <Figure>
                        <Figure.Image
                            className='img-fluid'
                            src={`${url}/storage/banners/${store.getValue('filename')}`}
                        />
                    </Figure>
                          
                :
                    <InputFile
                        fieldName='banner' 
                        placeholder='Choose banner'  
                        icon='fa-solid fa-image'
                        isLoading={isLoading}
                    />
                }
            </Col>
        
        </>
    );
};

export default HtmlFormComponent;