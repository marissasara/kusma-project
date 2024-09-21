import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useStore from '../store'

const ProtectedRoute = () => {

    const store = useStore();
    // get user data from server
    useEffect( () => {
        setIsLoading(true)
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
            setIsLoading(false)
        })


    },[] ) // every time page is loaded

    // handle redirect
    if( store.getValue('authenticated') === false) {
        return <Navigate to='/sign-in' replace />
    }

    return <Outlet />
}
export default ProtectedRoute