import React, { useState, useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
    } 
    else if (email === 'user@me.com' && password === '123') {
      setUser('employee')
    } 
    else {
      alert('Invalid Credentials')
    }
  }

  const data = useContext(AuthContext)
  console.log(data);
  

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

