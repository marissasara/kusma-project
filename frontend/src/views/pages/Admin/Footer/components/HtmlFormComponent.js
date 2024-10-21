import React, { useEffect, useState } from 'react'
import { InputText,InputFile, InputRadio, InputDate, InputTextarea, InputSelect, TextEditor } from '../../../../../libs/FormInput';
import { Form,Row,Col, Image, Figure, FormGroup } from 'react-bootstrap';
import useStore from '../../../../../store'

const HtmlFormComponent = ({isLoading}) => {
    const store = useStore();
    const url = process.env.REACT_APP_SERVER_URL; 
    const [selectedImage, setSelectedImage] = useState(null);
    const options = [
        { id: 'Column 1', name: 'Column 1' },
        { id: 'Column 2', name: 'Column 2' },
        { id: 'Column 3', name: 'Column 3' },
        { id: 'Address', name: 'Address' }
      ];

    useEffect( () => {
        const file = store.getValue('photo')
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    },[store.getValue('photo')])

    return (
        <>

            <Col className='mb-2'>
                <InputSelect
                    fieldName='hashtag' 
                    placeholder='Choose Group'  
                    options={options}
                    icon='fa-solid fa-pencil'
                    isLoading={isLoading}
                />

            </Col>

            <Col className='mb-2'>
                <InputText
                    fieldName='title' 
                    placeholder='Title'  
                    icon='fa-solid fa-pencil'
                    isLoading={isLoading}
                />

            </Col>
            
            <Col className='mb-2'>
                <TextEditor
                    fieldName='description' 
                    placeholder='Description'  
                    icon='fa-solid fa-clipboard'
                    rows={'10'}
                    isLoading={isLoading}
                />

            </Col>

{/*              
            <hr />
            <h5>Poster</h5>
            <Col className='mb-2'>
                {store.getValue('current_photo')  || selectedImage ? (
                <>
                    <Figure>
                         <Figure.Image
                            className="img-fluid"
                            src={selectedImage || `${url}/storage/footers/${store.getValue('current_photo')}`}
                            alt="Preview"
                        />
                    </Figure>

                    <InputFile
                    fieldName='photo' 
                    placeholder='Choose image'  
                    icon='fa-solid fa-image'
                    isLoading={isLoading}
                    />
                </>
                          
                ) : (
               <>  
               
               
               <InputFile
                        fieldName='photo' 
                        placeholder='Choose image'  
                        icon='fa-solid fa-image'
                        isLoading={isLoading}
                    /></>
                )}

              
            </Col>
             */}
          
        
        </>
    );
};

export default HtmlFormComponent;