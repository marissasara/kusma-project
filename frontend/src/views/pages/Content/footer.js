import React from 'react';
import { Row, Breadcrumb} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react'
import axios from 'axios'

const Footer = () => {
    const { id } = useParams();
    const url = process.env.REACT_APP_API_URL;
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const [footer,setFooter] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
  
    useEffect( () => {
      setIsLoading(true)
      axios(`${url}/homepage/footers/${id}/show`)
      .then( response => {
        //console.log(response)
        setFooter(response.data.footer)
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

       <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{footer?.title}</Breadcrumb.Item>
      </Breadcrumb>

       <h1>{footer?.title}</h1>
       <p><div dangerouslySetInnerHTML={{ __html: footer.description}} /></p>
    </Row>
    );
};

export default Footer;