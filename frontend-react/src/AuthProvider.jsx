import {useState, createContext } from 'react'

const AuthContext= createContext()
const AuthProvider = ({children}) => {

    const [isLoggedin, setLoggedIn] = useState(
        !!localStorage.getItem('AccessData')
    )
  return (
    <AuthContext.Provider value={{isLoggedin, setLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext}
