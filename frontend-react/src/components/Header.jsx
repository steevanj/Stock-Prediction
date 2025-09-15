import React, { useContext } from 'react'
import Button from './button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const{isLoggedin, setLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout = () =>{
    localStorage.removeItem('AccessData')
    localStorage.removeItem('RefreshData')
    setLoggedIn(false)
    navigate('/Login')  

  }
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
    <Link className='navbar-brand text-dark' to='/'>Stock Prediciton Portal</Link>
    <div>
      {isLoggedin ? (
        <>
        <Button text='Dashboard' class='btn-outline-info' url='/Dashboard'/>
        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
        </>
      ):(
        <>
        <Button text='Login' class='btn-outline-info' url='/Login'/>
      &nbsp;
      <Button text='Register' class='btn-info' url='/Register' />
        </>
      )}
      
    </div>
    </nav>
    </>
  )
}

export default Header
