import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { InputText, InputTextarea, appendFormData } from '../../../../libs/FormInput';
import useStore from '../../../../store';
import axios from 'axios';

const ChatroomComponent = () => {
    const store = useStore()
    const [isLoading, setIsLoading] = useState(false)
    const [lockUsername, setLockUsername] = useState(false)
    const url = process.env.REACT_APP_API_URL; 
    
    // preset 
    useEffect( () => {
        store.setValue('refresh', false)
    },[])    

    const handleSendButton = () => {
        setLockUsername(true)
        setIsLoading(true)
        console.log('send')
        const formData = new FormData();
        const dataArray = [
          { key: 'username', value: store.getValue('username') },
          { key: 'message', value: store.getValue('message') }, 
          { key: '_method', value: 'post' }, 
        ];
        appendFormData(formData, dataArray); // data appended to formData

        // send to Laravel
        axios({ 
            method: 'post', 
            url: `${url}/homepage/chats`,
            data: formData
          })
          .then( response => { // success 200
            console.log(response)
            store.setValue('refresh', true) // to force useEffect get new data for index
            store.setValue('message', null) // clear the message  
          })
          .catch( error => {
            console.warn(error)
          })
          .finally( () => {
            setIsLoading(false)
          })
    }

    return (
        <div className="text-dark p-4 rounded" style={{'backgroundColor':'#eaeaea','width':'100%'}}>
            <h2>Chatroom</h2>
            {/* Set fixed height, vertical scrolling, and prevent horizontal scrolling */}
            <div style={{ 'maxHeight': '400px', 'overflowY': 'auto', 'overflowX': 'hidden', 'padding': '10px', 'backgroundColor': '#fff' }}>
                <Row>
                    <Col xs={3}>Azril</Col>
                    <Col xs={9}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </Col>
                </Row>
                <Row className='mt-1 mb-1'>
                    <Col xs={3}>Nazli</Col>
                    <Col xs={9}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>Guest</Col>
                    <Col xs={9}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus lorem metus, a finibus purus luctus sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta erat sit amet efficitur hendrerit. Sed eget accumsan diam. Vivamus aliquet magna at ipsum iaculis venenatis.
                    </Col>
                </Row>
                {/* Add more rows as needed */}
                <Row className='mt-1 mb-1'>
                    <Col xs={3}>Nazli</Col>
                    <Col xs={9}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Col>
                </Row>
                <Row className='mt-1 mb-1'>
                    <Col xs={3}>Nazli</Col>
                    <Col xs={9}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Col>
                </Row>
            </div>
            <Row className='mt-1 p-2'>
                <InputText 
                     fieldName={'username'}
                     icon={'fa-solid fa-user'}
                     placeholder={'Your name'}
                     isLoading={lockUsername}
                />
            </Row>
            
            {store.getValue('username') !== null &&
            (<>
            <Row className='mt-1 p-2'>
 
                <InputTextarea 
                     fieldName={'message'}
                     icon={'fa-solid fa-message'}
                     placeholder={'message'}
                     rows={3}
                />

                
            </Row>

            <Row className='mt-1 p-2'>
                <Button
                onClick={ () => handleSendButton() }
                >Send
                </Button>
            </Row>
            </>)}
        </div>
    );
};
export default ChatroomComponent;
