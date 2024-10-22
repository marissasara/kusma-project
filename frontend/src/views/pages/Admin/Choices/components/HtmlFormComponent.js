import React, { useEffect, useState } from 'react'
import { InputText,InputFile, InputRadio, InputDate, InputTextarea } from '../../../../../libs/FormInput';
import { Form,Row,Col, Image, Figure, FormGroup, Card } from 'react-bootstrap';
import useStore from '../../../../../store'

const HtmlFormComponent = ({isLoading}) => {
    const store = useStore();
    const url = process.env.REACT_APP_SERVER_URL; 
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const [selectedImage, setSelectedImage] = useState(null);
    

    useEffect( () => {
        const file = store.getValue('photo')
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    },[store.getValue('photo')])

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
                {store.getValue('current_photo')  || selectedImage ? (
                <>
                    <Figure>
                         <Figure.Image
                            className="img-fluid"
                            src={selectedImage || `${url}/storage/choices/${store.getValue('current_photo')}`}
                            alt="Preview"
                        />
                    </Figure>
{/* 
                    <h5>Change Image</h5>
                    <InputFile
                    fieldName='photo' 
                    placeholder='Choose image'  
                    icon='fa-solid fa-image'
                    isLoading={isLoading}
                    /> */}

                    {store.getValue('current_songfile')  &&  (
                    <>
                    <Card className='mt-3 mb-3 p-3'>
                        <Card.Title>Lagu MP3</Card.Title>
                        <audio controls>
                            <source src={`${serverUrl}/storage/songfiles/${store.getValue('current_songfile') }`} type="audio/mpeg" />
                        </audio>
                    </Card>
             
                    </>
                    )}
                    {/* <h5>Replace Song File ( mp3 ) </h5>
                    <InputFile
                    fieldName='songfile' 
                    placeholder='Choose mp3'  
                    icon='fa-solid fa-music'
                    isLoading={isLoading}
                    /> */}
                </>
                          
                ) : (
               <>  
               
               
               <InputFile
                    fieldName='photo' 
                    placeholder='Choose image'  
                    icon='fa-solid fa-image'
                    isLoading={isLoading}
                />

                <hr />
                <h5>Song File ( mp3 ) </h5>
                <InputFile
                    fieldName='songfile' 
                    placeholder='Choose mp3'  
                    icon='fa-solid fa-music'
                    isLoading={isLoading}
                />
                
                </>
                )}

              
            </Col>
            
          
        
        </>
    );
};

export default HtmlFormComponent;