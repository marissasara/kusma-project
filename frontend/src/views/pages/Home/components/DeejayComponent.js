import  { useEffect, useState } from 'react'
import { Carousel, FigureImage, Image, Card,Button } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';

const DeejayComponent = () => {

  const url = process.env.REACT_APP_API_URL;
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [deejays,setDeejays] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  useEffect( () => {
    setIsLoading(true)
    axios(`${url}/homepage/deejays`)
    .then( response => {
      //console.log(response)
      setDeejays(response.data.deejays)
    })
    .catch( error => {
      console.warn(error)
    })
    .finally( () =>{ 
      setIsLoading(false)
    })
  },[])

  const cardItems = () => {

    if (!deejays || deejays.length === 0) {
      // Return some default content or a message indicating no deejays available
      return <div></div>;
    } 

    if (deejays.length > 0) {
      return deejays.map((deejay, index) => {

          return (
            
              // <Carousel.Item key={index}>{
              //   deejay?.filename && 
               
              //     <FigureImage
              //       className="d-block w-100"
              //       src={`${serverUrl}/storage/deejays/${deejay.filename}`} 
              //       alt="First slide"
              //     />
              
              //   }
              // </Carousel.Item>
              <Card key={index} className='me-3' style={{ width: '10rem', marginBottom: '1rem' }}>
              <Card.Img variant="top" src={`${serverUrl}/storage/deejays/${deejay.filename}`} alt={deejay.title} />
              <Card.Body>
                <Card.Title>{deejay.title}</Card.Title>
                <Card.Text>{deejay.description}</Card.Text>
                {/* <Button variant="primary" href="#">Profile</Button> */}
              </Card.Body>
            </Card>
           
          );
      });
      
  }


  }

  if (deejays.length > 0){
    return (
      <div className="d-flex flex-wrap">
        {cardItems()}
      </div>
      );
  }
 
}

export default DeejayComponent;
