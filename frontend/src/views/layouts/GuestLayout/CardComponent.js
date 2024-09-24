import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponent = () => {
  const cardData = [
    { title: 'Deejay 1', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
    { title: 'Deejay 2', text: 'Some quick example text to build on the Deejay and make up the bulk of the card\'s content.' },
    { title: 'Deejay 3', text: 'Some quick example text to build on the Deejay and make up the bulk of the card\'s content.' },
    { title: 'Deejay 4', text: 'Some quick example text to build on the Deejay and make up the bulk of the card\'s content.' },
    { title: 'Deejay 5', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.' },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-between">
      {cardData.map((card, index) => (
        <Card key={index} style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Card image" />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button variant="primary" href="#">Profile</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardComponent;
