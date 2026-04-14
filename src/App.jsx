import React, { useState, useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  // Initial Load
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if (loggedInUser) {
      const parsedData = JSON.parse(loggedInUser)
      
      if (parsedData.role === 'employee' && !parsedData.data) {
        localStorage.removeItem('loggedInUser')
        setUser(null)
        return
      }
      
      setUser(parsedData.role)
      setLoggedInUserData(parsedData.data)
    }
  }, [])

  // AUTO-SYNC LOGIC: This makes the dashboard update instantly when a button is clicked!
  useEffect(() => {
    if (user === 'employee' && loggedInUserData && userData) {
      const updatedEmployee = userData.find((e) => e.id === loggedInUserData.id)
      if (updatedEmployee) {
        setLoggedInUserData(updatedEmployee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }))
      }
    }
  }, [userData])

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } 
    else if (userData) {
      const employee = userData.find((e) => e.email === email && e.password === password)
      
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert('Invalid Credentials')
      }
    } else {
      alert('Invalid Credentials')
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser} />}
      {user === 'employee' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  )
}

export default App