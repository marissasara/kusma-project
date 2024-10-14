import { useState } from 'react'
import { Button, Figure, Modal} from 'react-bootstrap'


export default function VoteModal() {
  
    const url = process.env.REACT_APP_SERVER_URL; 
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleShowClick = () =>{
      setShow(true)
    } 

    const handleCloseClick = () => {
      handleClose()
    }


    return (
      <>
        <Figure>

            <Button 
                className="btn btn-sm"
                onClick={handleShowClick} 
            >Vote
            </Button>
        </Figure>
  
        <Modal size={'lg'} show={show} onHide={handleCloseClick}>
          <Modal.Header closeButton>
            <Modal.Title>Vote</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            undi
          </Modal.Body>
          
          <Modal.Footer>        
            
            <Button 
              variant="secondary" 
              onClick={handleCloseClick}>
              Close
            </Button>

          <Button 
              variant="primary" 
              onClick={handleCloseClick}>
              Vote
            </Button>
    

          </Modal.Footer>
        </Modal>
      </>
    );
  }