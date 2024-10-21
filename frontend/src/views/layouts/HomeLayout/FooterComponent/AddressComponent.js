import  { useEffect, useState } from 'react'
import { Carousel, FigureImage, Image, Card,Button, Col } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';

const AddressComponent = () => {

  const url = process.env.REACT_APP_API_URL;
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [address,setAddress] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  useEffect( () => {
    setIsLoading(true)
    axios(`${url}/homepage/footers/address`)
    .then( response => {
      console.log(response)
      setAddress(response.data.address)
    })
    .catch( error => {
      console.warn(error)
    })
    .finally( () =>{ 
      setIsLoading(false)
    })
  },[])


      
  return (

    <>
      <h6 className="text-uppercase fw-bold">{address?.title}</h6>
      <hr id="footercolorhr" />
      <p><div dangerouslySetInnerHTML={{ __html: address.description}} /></p>
    </>
  ); 
}

export default AddressComponent;
