import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useStore from '../store'

const ProtectedRoute = () => {

    //const isLoggedIn = useAuthStore(state => state.isLoggedIn) // using zustand
    const store = useStore()

    //if(!isLoggedIn){
    if(!store.isAuthenticated){
        return <Navigate to='/sign-in' replace />
    }

    return <Outlet />
}
export default ProtectedRoute