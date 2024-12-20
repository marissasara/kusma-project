import React, { useEffect,useState  } from 'react'
import { InputText,InputFile, InputRadio, InputDate, InputTextarea } from '../../../../../libs/FormInput';
import { Form,Row,Col, Image, Figure, FormGroup } from 'react-bootstrap';
import useStore from '../../../../../store'

const HtmlFormComponent = ({isLoading}) => {
    const store = useStore();
    const url = process.env.REACT_APP_SERVER_URL; 
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect( () => {
        const file = store.getValue('photo')
        console.log(file)
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    },[store.getValue('photo')])

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
            
            <Col className='mb-5'>
                <InputTextarea
                    rows='6' 
                    fieldName='description' 
                    placeholder='Profile'  
                    icon='fa-solid fa-clipboard'
                    isLoading={isLoading}
                />

            </Col>

            <h5>Social Media</h5>
            <Col className='mb-2'>
                <InputText 
                    fieldName='facebook' 
                    placeholder='Facebook URL'  
                    icon='fa-brands fa-facebook-f'
                    isLoading={isLoading}
                />
            </Col>

            <Col className='mb-5'>
                <InputText 
                    fieldName='instagram' 
                    placeholder='Instagram URL'  
                    icon='fa-brands fa-instagram'
                    isLoading={isLoading}
                />
            </Col>
            
            
            
            <Col className='mb-2'>

            {(store.getValue('photo') || selectedImage) && (
                <>
                <h5>New Photo</h5>
                <Figure>
                    <Figure.Image
                        className="img-fluid col-6"
                        src={selectedImage ? selectedImage : `${url}/storage/deejays/${store.getValue('photo')}`}
                        alt="Preview"
                    />
                </Figure>
               
                </>
            )}

                {store.getValue('filename') &&

                    <>
                    <h5>Current Photo</h5>
                    <Figure>
                        <Figure.Image
                            className='img-fluid col-6'
                            src={`${url}/storage/deejays/${store.getValue('filename')}`}
                        />
                    </Figure>
                    </>    
                }
                    <InputFile
                        fieldName='photo' 
                        placeholder='Choose deejay'  
                        icon='fa-solid fa-image'
                        isLoading={isLoading}
                    />
                
            </Col>
        
        </>
    );
};

export default HtmlFormComponent;