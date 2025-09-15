import { useState, useContext } from 'react'
import './assets/css/style.css'
import Main from './components/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './components/Dashboard/Dashboard'
import Privateroute from './components/Privateroute'
import PublicRoute from './components/PublicRoute'

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Register' element={<PublicRoute><Register /></PublicRoute>} />
        <Route path='/Login' element={<PublicRoute><Login /></PublicRoute>} />
        <Route path = '/Dashboard' element ={<Privateroute><Dashboard /></Privateroute>} />
      </Routes>
      <Footer />
      </BrowserRouter>  
      </AuthProvider>
    </>
  )
}

export default App
