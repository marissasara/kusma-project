import React from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react'
import axios from 'axios'

const Content = () => {
    const { id } = useParams();
    const url = process.env.REACT_APP_API_URL;
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const [footers,setFooters] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
  
    useEffect( () => {
      setIsLoading(true)
      axios(`${url}/homepage/footers/${id}/show`)
      .then( response => {
        console.log(response)
      })
      .catch( error => {
        console.warn(error)
      })
      .finally( () =>{ 
        setIsLoading(false)
      })
    },[])
    
    return (
    <Row className="mt-4 mb-4 ms-1 rounded border p-3">
       {id}
    </Row>
    );
};

export default Content;