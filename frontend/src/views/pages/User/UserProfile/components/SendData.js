import React from 'react';
import axios from '../../../../../libs/axios';
import { appendFormData } from '../../../../../libs/FormInput';
import useStore from '../../../../../store';

const SendData = ({store}) => {


    const url = process.env.REACT_APP_API_URL; // make sure API url not SERVER url
    store.setValue('errors', null) // clear any validation errors
    const formData = new FormData();

    // construct form data to be sent to API
    const dataArray = [
      { key: 'title', value: store.getValue('title') }, // fieldname
      { key: 'name', value: store.getValue('name') },  // fieldname
      { key: '_method', value: 'put' } // to comform with Laravel PUT method   
    ];
    
    // append all the data to formData 
    appendFormData(formData, dataArray); 

    // use axios to send the data
    axios({ 
        method: 'post', // method is POST
        url: `${url}/user/user_profiles`, // based on routes/user.php
        data: formData // the form data
      })
      .then( response => { // success 200
        console.log(response)
      })
      .catch( error => {
        console.warn(error)

        // validation error by laravel
        if( error.response?.status == 422 ){ // detect 422 errors by Laravel
          console.log(error.response.data.errors)
          store.setValue('errors', error.response.data.errors ) // set the errors to store
        }
      })
      .finally( () => {
      })

};

export default SendData;