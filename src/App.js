import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/user/Dashboard'
import SignUp from './components/user/SignUp'

const App = () => {
  const [user, setUser] = useState({})

  // Find User Info
  useEffect(() => {
    const getUser = async () => {
      const userFromServer = await fetchUser(user.firstName ? user.id : 10)

      setUser(formatUser(userFromServer))
    }

    getUser()
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

  const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:5000/api/v1/users/${id}`)
    const data = await res.json()

    return data
  }

  // Create User
  const createUser = async (newUser) => {
    const res = await fetch('http://localhost:5000/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    })
    const data = await res.json()

    setUser(formatUser(data))
  }

  return (
    <div className="App">
      <Dashboard user={user} />
      <SignUp onAdd={createUser} />
    </div>
  );
}

export default App
