import React, { useEffect, useState } from 'react'
import { InputText,InputFile, InputRadio, InputDate, InputTextarea } from '../../../../../libs/FormInput';
import { Form,Row,Col, Image, Figure, FormGroup } from 'react-bootstrap';
import useStore from '../../../../../store'

const HtmlFormComponent = ({isLoading}) => {
    const store = useStore();
    const url = process.env.REACT_APP_SERVER_URL; 
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect( () => {
        const file = store.getValue('photo')
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    })

    return (
        <>
 
            <h5>Choice</h5>
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

             
            <hr />
            <h5>Poster</h5>
            <Col className='mb-2'>
                {store.getValue('filename')  || selectedImage ? (

                    <Figure>
                         <Figure.Image
                            className="img-fluid"
                            src={selectedImage || `${url}/storage/choices/${store.getValue('filename')}`}
                            alt="Preview"
                        />
                    </Figure>
                          
                ) : (
                    <InputFile
                        fieldName='photo' 
                        placeholder='Choose image'  
                        icon='fa-solid fa-image'
                        isLoading={isLoading}
                  
                    />
                )}
            </Col>
            
          
        
        </>
    );
};

export default HtmlFormComponent;