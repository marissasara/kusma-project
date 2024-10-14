import { useState } from 'react'
import { Button, Figure, Modal} from 'react-bootstrap'
import { appendFormData } from '../../../../../libs/FormInput';
import axios from 'axios';
import useStore from '../../../../../store';

export default function VoteModal({topicId, choiceId}) {
  
    const store = useStore()
    const url = process.env.REACT_APP_API_URL; 
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const [show, setShow] = useState(false);  
    const [choice,setChoice] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleShowClick = () =>{
        console.log(url)
      setShow(true)
      axios(`${url}/homepage/choice/${choiceId}`)
      .then( response => {
        console.log(response)
        setChoice(response.data.choice)
      })
      .catch( error => {
        console.warn(error)
      })
      .finally( () =>{ 
        setIsLoading(false)
      })
      
    } 

    const handleCloseClick = () => {
        handleClose()
    }

    const handleSubmitClick = () => {
        setIsLoading(true)
        //console.log('voted');

        const formData = new FormData();
        const dataArray = [
          { key: 'topic_id', value: topicId },
          { key: 'choice_id', value: choiceId }, 
          { key: '_method', value: 'post' }, 
        ];

        appendFormData(formData, dataArray);

        // send to Laravel
        axios({ 
            method: 'post', 
            url: `${url}/homepage/vote`,
            data: formData
          })
          .then( response => { // success 200
            console.log(response)

            // if success, generate a localstorage with TopicId
            localStorage.setItem('topic_id' , topicId);
            store.setValue('refresh', true)
          })
          .catch( error => {
            console.warn(error)
          })
          .finally( () => {
            setIsLoading(false)
          })
        
        handleClose()
    }

    const PollItem = ({ id,title, description, filename }) => {
        return (
          <div className="row align-items-center">
            <div className="col-4">
           
               <Figure.Image
                    className="image-fluid rounded"
                    style={{ 'height' : '250px'}}
                    src={`${serverUrl}/storage/choices/${filename}`} 
                    alt="First slide"
                  />
            </div>
            <div className="col-8">
              <h5>{title}</h5>
              <p className="mb-1">{description}</p>
              {/* <p className="text-muted">{type}</p> */}
            </div>
           
          </div>
        );
    };


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
            <Modal.Title>{choice.title}</Modal.Title>
          </Modal.Header>

        <Modal.Body>
            <div className="container">
        
                <PollItem
                    id={choice.id}
                    //title={choice.title}
                    description={choice.description}
                    filename={choice.filename}
                />
                
            </div>
        </Modal.Body>
          
        <Modal.Footer>        
            
            <Button 
              variant="secondary" 
              onClick={handleCloseClick}>
              Close
            </Button>

          <Button 
              variant="primary" 
              onClick={handleSubmitClick}>
              Vote
            </Button>
    

          </Modal.Footer>
        </Modal>
      </>
    );
  }