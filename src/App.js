import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/user/Dashboard'
import SignUp from './components/user/SignUp'

const App = () => {
  const [user, setUser] = useState({})
  const [errors, setErrors] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  // Find User Info
  useEffect(() => {
    if(user.id) {
      fetch(`http://localhost:5000/api/v1/users/${user.id}`)
        .then(res => res.json())
        .then(
          (result) => {
            setUser(result)
            result.id && setLoggedIn(true)
          },
          (error) => {
            setLoggedIn(false)
            setErrors(error)
          }
        )
    }
  }, [])

  const formatUser = (rawUser) => {
    const formattedUser = {
      id: rawUser.data.id,
      firstName: rawUser.data.attributes.first_name,
      lastName: rawUser.data.attributes.last_name,
      email: rawUser.data.attributes.email,
      role: rawUser.data.attributes.role,
      companyId: rawUser.data.relationships.company.data.id,
    }

    return formattedUser
  }

  // Create User
  const createUser = async (newUser) => {
    const res = await fetch('http://localhost:5000/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
    const data = await res.json()

    // Check for and display creation errors
    if(data.error) {
      setErrors(data)
      return
    }

    setUser(formatUser(data))
    setLoggedIn(true)
  }

  return (
    <div className="App">
      {loggedIn ? (
        <Dashboard user={user} />
        ) : (
        <SignUp onAdd={createUser} errors={errors} />
      )}
    </div>
  )
}

export default App
