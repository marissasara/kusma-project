import React from 'react';
import axios from '../../../../../libs/axios';

const FetchData = () => {

    const url = process.env.REACT_APP_API_URL; 

    axios({ 
        method: 'get', 
        url: `${url}/user/user_profiles`, // based on routes/user.php
      })
      .then( response => { // success 200
        console.log(response)

      })
      .catch( error => {
        console.warn(error)

      })
      .finally( () => {

      })

};

export default FetchData;