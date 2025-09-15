import React, { Children } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import { Navigate, useNavigate } from 'react-router-dom'
const Privateroute = ({Children}) => {
    const {isLoggedin} = useContext(AuthContext)
  return isLoggedin ? (
    Children
  ) : (
    <Navigate to ='/Login' />
  )
}

export default Privateroute
