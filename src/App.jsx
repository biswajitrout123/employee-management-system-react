import React, { useState, useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData.employees);

  useEffect(() => {
    
  
    if(authData) {
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser) {
        setUser(loggedInUser.role)
      }
    }
  }, [authData])
  
  



  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    } 
    else if (authData && authData.employees.find((e)=> email == email && e.password == password)) {
      setUser('employee')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
    } 
    else {
      alert('Invalid Credentials')
    }
  }

  
  

  // Just to see when user changes
  useEffect(() => {
    console.log("Logged in user:", user)
  }, [user])

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && <AdminDashboard />}

      {user === 'employee' && <EmployeeDashboard />}
    </>
  )
}

export default App

