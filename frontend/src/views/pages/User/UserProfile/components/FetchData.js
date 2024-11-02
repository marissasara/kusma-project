import React from 'react';
import axios from '../../../../../libs/axios';

const FetchData = ({store}) => {

    const url = process.env.REACT_APP_API_URL; 
    store.setValue('is_loading' , true)
    axios({ 
        method: 'get', 
        url: `${url}/user/user_profiles`, // based on routes/user.php
      })
      .then( response => { // success 200
        console.log(response)
        store.setValue('title', response.data.user_profile.title) // title from database
        store.setValue('name', response.data.user_profile.name) // name from database

      })
      .catch( error => {
        console.warn(error)

      })
      .finally( () => {
        store.setValue('is_loading' , false)
      })

};

export default FetchData;