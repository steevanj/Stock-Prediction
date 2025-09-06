import React from 'react'
import Button from './button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
    
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-dark'>Stock Prediciton Portal</h1>
          <p className='text-dark lead'>What is Next.js?
            A framework for React → It adds structure, performance, and extra features to React.
            Helps you build server-rendered and static web applications.
            Focuses on speed, SEO, and developer experience.</p>
            <Button text='Login' class='btn-outline-info'/>
        </div>
      </div>
      
    </>
  )
}

export default Main
