import React, { useState,useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useStore from '../store';
import axios from './axios';

const ProtectedRoute = () => {

    const store = useStore();
    const url = process.env.REACT_APP_API_URL; // API server
    
    // get user data from server
    useEffect( () => {
     
        axios({
            method: 'get',
            url: `${url}/user`, // localhist:8080/api/user ( sanctum protected )
        })
        .then(response => {
            console.log(response.data);
            store.setValue('auth', response.data)
        })
        .catch(error => {
            console.warn(error)
            if( error.response?.status === 401 ){ // unauthorized
                console.log('ssss')
                localStorage.removeItem('token') // token to be used with axios interceptor
                store.setValue('authenticated', false)
            }
        })
        .finally( () => {
           
        })


    },[] ) // every time page is loaded

    // handle redirect
    if( store.getValue('authenticated') === false) {
        return <Navigate to='/sign-in' replace />
    }

    return <Outlet />
}
export default ProtectedRoute