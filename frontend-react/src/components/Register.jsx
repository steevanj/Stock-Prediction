import React, {useState}  from 'react'
import axios from 'axios'
import { use } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  const[username, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const [error, setError] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState((false))
  const handleSubmit = async (e) =>{
    e.preventDefault()
    setLoading(true)
    const userData ={username,email,password}
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/register/', userData)
      console.log('Response = >',response.data)
      console.log('Registration Succefull')
      setError({})
      setSuccess(true)
    }
    catch(error){
      setError(error.response.data)
      console.log('You got an error',error.response.data)

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
                <h3 className='text-light text-center mb-4'>Create an Account</h3>
                <form onSubmit={handleSubmit}>
                  <div className='mb-2'>
                    <input className='form-control' type='text' placeholder='Username' value={username} onChange={(e) => setName(e.target.value)}></input>
                    <small>{error.username&&<div className='text-danger'>{error.username} </div>}</small>
                  </div>
                    <div className='mb-2'>
                      <input className='form-control' type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='mb-2'>
                      <input className='form-control' type='password' placeholder='Set Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                      <small>{error.password&&<div className='text-danger'>{error.password} </div>}</small>
                    </div>
                    {success && <div className='alert alert-success'>Registration Succefull </div>}
                    {loading ? (
                      <button type='submit' className='btn btn-outline-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin />Please wait...</button>
                    ):(
                      <button type='submit' className='btn btn-outline-info d-block mx-auto'>Register</button>
                    )}
                  </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register
