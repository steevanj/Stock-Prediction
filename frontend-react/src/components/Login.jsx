import React, {useState,useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
  const[username, setName] = useState('')
  const[password, setPassword] = useState('')
  const [loading, setLoading] = useState((false))
  const navigate = useNavigate()
  const[error, setError] = useState('')
  const{isLoggedin, setLoggedIn} = useContext(AuthContext)
  const handleLogin = async (e) =>{
    e.preventDefault()
    setLoading(true)
    const userData = {username, password}
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/token/', userData)
      console.log(response.data)
      localStorage.setItem('AccessData', response.data.access)
      localStorage.setItem('RefreshData', response.data.refresh)
      console.log('Login Success')
      setLoggedIn(true)
      navigate('/')
    }
    catch(error){
      setError('Invalid Credentials')
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <>
    <div className='container'>
        <div className='row justify-content-center '>
            <div className='col-md-6 bg-light-dark p-5 rounded'>
                <h3 className='text-light text-center mb-4'>Login to our portal</h3>
                <form onSubmit={handleLogin}>
                  <div className='mb-2'>
                    <input className='form-control' type='text' placeholder='Username' value={username} onChange={(e) => setName(e.target.value)}></input>
                   
                  </div>
                      <div className='mb-2'>
                      <input className='form-control' type='password' placeholder='Set Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                      
                    </div>
                    {error && <div className='text-danger'>{error}</div>}
                    {loading ? (
                      <button type='submit' className='btn btn-outline-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin />Loging In...</button>
                    ):(
                      <button type='submit' className='btn btn-outline-info d-block mx-auto'>Login</button>
                    )}
                  </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
