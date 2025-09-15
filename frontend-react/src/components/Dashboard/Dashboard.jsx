import axios from 'axios'
import React, {useEffect} from 'react'
import { data } from 'react-router-dom'
import axiosinstance from '../../axiosinstance'

const Dashboard = () => {
    useEffect( () =>{
       const fetchProtectedData = async () =>{
        try{
            const response = await axiosinstance.get('/protected_view/')
            console.log('Success :', response.data)
        }
        catch(error)
        {
            console.error('Error Fetching Data', error)

        }
       }
       fetchProtectedData() 
    },[])
  return (
    <>
    <h1 className='text-light center'>Dashboard</h1>
    </>
  )
}

export default Dashboard
