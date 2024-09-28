import { useEffect, useState } from 'react'
import { Button, Modal} from 'react-bootstrap'
import { InputText, InputTextarea, appendFormData } from '../../../../../libs/FormInput'
import axios from '../../../../../libs/axios'
import useStore from '../../../../../store';
import HtmlFormComponent from '../components/HtmlFormComponent';

export default function CreateModal() {
    const store = useStore()
    const url = process.env.REACT_APP_API_URL; 
    const errors = store.getValue('errors')
    const [show, setShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleShowClick = () =>{
      store.emptyData()
      store.setValue('errors', null)
      setShow(true)
    } 

    const handleCloseClick = () => {
      store.setValue('errors', null)
      handleClose()
    }


    /**
     * When user click submit button
     */
    const handleSubmitClick = () => {
        store.setValue('errors', null)
        const formData = new FormData();
        const dataArray = [
          { key: 'title', value: store.getValue('title') },
          { key: 'description', value: store.getValue('description') }, 
          { key: 'redirect_url', value: store.getValue('redirect_url') }, 
          { key: 'banner', value: store.getValue('banner') },
          { key: 'active', value: store.getValue('active') },
          { key: 'published_start', value: store.getValue('published_start') },
          { key: 'published_end', value: store.getValue('published_end') },
        ];
        
        appendFormData(formData, dataArray);

        // Laravel special
        formData.append('_method', 'post'); // get|post|put|patch|delete

        // send to Laravel
        axios({ 
            method: 'post', 
            url: `${url}/admin/banners`,
            data: formData
          })
          .then( response => { // success 200
            console.log(response)
            store.setValue('refresh', true) // to force useEffect get new data for index
            handleClose() // close the modal
          })
          .catch( error => {
            console.warn(error)
            
            if( error.response?.status == 422 ){ // detect 422 errors by Laravel
              console.log(error.response.data.errors)
              store.setValue('errors', error.response.data.errors ) // set the errors to store
            }
          })
          .finally( () => {
            setIsLoading(false)
          })
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShowClick}>
          Create
        </Button>
  
        <Modal size={'lg'} show={show} onHide={handleCloseClick}>
          <Modal.Header closeButton>
            <Modal.Title>Create Banner</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <HtmlFormComponent isLoading={isLoading} />
          </Modal.Body>
          
          <Modal.Footer>
            <Button 
              disabled={isLoading}
              variant="secondary" 
              onClick={handleCloseClick}>
              Close
            </Button>

            <Button 
              disabled={isLoading}
              variant="primary" 
              onClick={handleSubmitClick}>
              Submit
            </Button>

          </Modal.Footer>
        </Modal>
      </>
    );
  }