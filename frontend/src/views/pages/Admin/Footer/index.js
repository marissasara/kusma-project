import { useEffect, useState } from 'react';
import useStore from '../../../../store';
import axios from '../../../../libs/axios';
import DataTableComponent from './components/DataTableComponent';
import { Link,useParams } from 'react-router-dom';
import { Breadcrumb, Card } from 'react-bootstrap';



const Choices = () => {
    const store = useStore();
    const { topicId } = useParams();
    const url = process.env.REACT_APP_API_URL + '/admin/footers/' + topicId; // API server
    const topic = store.getValue('topic')
    // const [topic, setTopic] = useState({})
 
   
    // preset
    useEffect(() => {
        // Code to run when the component is loaded (similar to window.onload)
        console.log("Page has loaded!");

        // Zustand presets
        store.emptyData() // clear all previous data
        store.setValue('refresh', false ) // refresh set to false
        store.setValue('topic', {}) // initiate as object
        store.setValue('footers', {}) // initiate as object

        // Optionally, you can return a cleanup function to run when the component is unmounted
        return () => {
            console.log("Component is unmounting!");
        };
    }, []); // Empty dependency array means this runs only once, when the component loads


    // to get items data ( footers )
    useEffect( () => 
        {
            // modified axios to prepend Bearer Token on header
            axios( 
                {
                    method: 'get', // method is GET
                    url: store.getValue('url') ? store.getValue('url') : url
                } 
            )
            .then( response => { // response block
                //console.log(response)
                //setItems(response.data.users) // get the data
                //setTopic(response.data.topic)
                store.setValue('topic', response.data.topic ?  response.data.topic : null) 
                store.setValue('footers', response.data.footers ?  response.data.footers : null) // to be used in DataTableComponent
                store.setValue('refresh', false ) // reset the refresh state to false
            })
            .catch( error => { // error block
                console.warn(error) // output to console
            })
        },
        [
            store.getValue('url'), // listener when url changed by pagination click
            store.getValue('refresh') // listener when create / update / delete / search performed
        ] 

    ) // useEffect()



    return (
        <div>

    <Breadcrumb>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/admin/topics" }}>
        Topics
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        {topic?.title || `Topic ${topic?.title}`}
      </Breadcrumb.Item>
    </Breadcrumb>

            <Card className='p-3 mb-3'>
                {topic?.title ? 
                <> 
                    <h2>{topic?.title}</h2>
                    <p>{topic?.description}</p>
                </>
                :
                <p>Loading...</p>
                }
               
            </Card>
            <DataTableComponent />
        </div>
    );
};

export default Choices;