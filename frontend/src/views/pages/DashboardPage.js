import React, { useState,useEffect } from 'react';
import useStore from '../../store';
import axios from '../../libs/axios';
import { Navigate,Link } from 'react-router-dom';

const DashboardPage = () => {

    // const store = useStore(); // zustand store management
    // const url = process.env.REACT_APP_API_URL; // API server
    // const [isLoading, setIsLoading] = useState(false);
    // const auth = store.getValue('auth');

    // // get user data from server
    // useEffect( () => {
    //     setIsLoading(true)
    //     axios({
    //         method: 'get',
    //         url: `${url}/user`, // localhist:8080/api/user ( sanctum protected )
    //     })
    //     .then(response => {
    //         //console.log(response.data);
    //         store.setValue('auth', response.data)
    //     })
    //     .catch(error => {
    //         console.warn(error)
    //         if( error.response?.status === 401 ){ // unauthorized
    //             localStorage.removeItem('token') // token to be used with axios interceptor
    //             store.setValue('authenticated', false)
    //         }
    //     })
    //     .finally( () => {
    //         setIsLoading(false)
    //     })


    // },[] ) // every time page is loaded

    // // handle redirect
    // if( store.getValue('authenticated') === false) {
    //     return <Navigate to='/sign-in' replace />
    // }
    
    return (
        <div>
            <h1>Dashboard</h1>
 
            {/* token from storage :  {localStorage.getItem('token')}
            <br /> 
            name : {auth?.name}
            <br /> 
            email : {auth?.email} */}
   
        </div>
    );
};

export default DashboardPage;