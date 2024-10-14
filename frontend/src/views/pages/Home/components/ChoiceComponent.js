import React, { useEffect,useState } from 'react';
import { Row,Col, FigureImage } from 'react-bootstrap';
import axios from 'axios'
import VoteModal from './ChoiceComponent/VoteModal';
import useStore from '../../../../store';

const ChoiceComponent = ({topicId}) => {
     // constants
     const store = useStore()
     const url = process.env.REACT_APP_API_URL;
     const serverUrl = process.env.REACT_APP_SERVER_URL;
     const [choices,setChoices] = useState([]);
     const [isLoading,setIsLoading] = useState(false);
 

    // check if user already voted ?
    const votedTopicId = localStorage.getItem('topic_id');

    console.log('topic id is')
    console.log(votedTopicId)

     useEffect( () => {
         setIsLoading(true)
         axios(`${url}/homepage/choices/${topicId}`)
         .then( response => {
           console.log(response)
           setChoices(response.data.choices)
           store.setValue('refresh', false)
         })
         .catch( error => {
           console.warn(error)
         })
         .finally( () =>{ 
           setIsLoading(false)
         })
       },[store.getValue('refresh')])

    const PollItem = ({ id,title, description, filename }) => {
        return (
          <div className="row align-items-center mb-3 border-bottom pb-3">
            <div className="col-3">
           
               <FigureImage
                    className="image-fluid rounded"
                    style={{ 'height' : '250px'}}
                    src={`${serverUrl}/storage/choices/${filename}`} 
                    alt="First slide"
                  />
            </div>
            <div className="col-7">
              <h5>{title}</h5>
              <p className="mb-1">{description}</p>
              {/* <p className="text-muted">{type}</p> */}
            </div>
            <div className="col-2 text-center">
              {/* <h2 className="text-success">{rank}</h2> */}
              {/* <button className="btn btn-outline-secondary btn-sm" disabled>Vote</button> */}
              { votedTopicId != topicId  ?
              <VoteModal topicId={topicId} choiceId={id} />
              :
              <button className="btn btn-outline-secondary btn-sm" disabled>Vote</button> 
              }
            </div>
          </div>
        );
    };


    return (
    
                <div className="container">
                {choices.map((item, index) => (
                    <PollItem
                    key={index}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    filename={item.filename}
                    />
                ))}
                </div>
     
    );
};

export default ChoiceComponent;