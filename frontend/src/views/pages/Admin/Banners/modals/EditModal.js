import { useEffect, useState } from 'react'
import { Button, Modal} from 'react-bootstrap'
import { InputText, InputTextarea, appendFormData } from '../../../../../libs/FormInput'
import axios from '../../../../../libs/axios'
import useStore from '../../../../../store';
import HtmlFormComponent from '../components/HtmlFormComponent';

export default function EditModal({id}) {
    const store = useStore()
    const url = process.env.REACT_APP_API_URL; 

    const errors = store.getValue('errors')
   
    const [show, setShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleShowClick = () =>{
      //store.emptyData() // empty store data
      store.setValue('errors', null)
      setIsLoading(true)
      setShow(true)
      
      // load banner data based on given id
      axios({ 
        method: 'get', 
        url: `${url}/admin/banners/${id}`,
        })
      .then( response => { // success 200
          console.log(response)
          if( response?.data?.banner.hasOwnProperty('title') ){
            store.setValue('title', response?.data?.banner?.title )
          }
          if( response?.data?.banner.hasOwnProperty('description') ){
            store.setValue('description', response?.data?.banner?.description )
          }
          if( response?.data?.banner.hasOwnProperty('redirect_url') ){
            store.setValue('redirect_url', response?.data?.banner?.redirect_url )
          }
          if( response?.data?.banner.hasOwnProperty('filename') ){
            store.setValue('filename', response?.data?.banner?.filename )
          }

          if( response?.data?.banner.hasOwnProperty('active') ){
            store.setValue('active', response?.data?.banner?.active )
          }

          if( response?.data?.banner.hasOwnProperty('published_start') ){
            store.setValue('published_start', response?.data?.banner?.published_start )
          }

          if( response?.data?.banner.hasOwnProperty('published_end') ){
            store.setValue('published_end', response?.data?.banner?.published_end )
          }

          })
      .catch( error => {
          console.warn(error)
      })
      .finally( () => {
        setIsLoading(false)
      })
      
    } 

    const handleCloseClick = () => {
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
          { key: 'active', value: store.getValue('active') },
          { key: 'published_start', value: store.getValue('published_start') },
          { key: 'published_end', value: store.getValue('published_end') },
          { key: '_method', value: 'put' },
        ];
        
        appendFormData(formData, dataArray);

        // Laravel special
        //formData.append('_method', 'post'); // get|post|put|patch|delete

        // send to Laravel
        axios({ 
            method: 'post', 
            url: `${url}/admin/banners/${id}`,
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
        <Button size="sm" variant="primary" onClick={handleShowClick}>
          Edit
        </Button>
  
        <Modal size={'lg'} show={show} onHide={handleCloseClick}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Banner</Modal.Title>
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