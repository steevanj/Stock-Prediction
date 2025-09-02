import React from 'react'
import Button from './button'
const Header = () => {
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
    <a className='navbar-brand text-dark' href=''>Stock Prediciton Portal</a>
    <div>
      <Button text='Login' class='btn-outline-info'/>
      &nbsp;
      <Button text='Register' class='btn-info' />
    </div>
    </nav>
    </>
  )
}

export default Header
