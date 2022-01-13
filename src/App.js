import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import SignUp from './components/user/SignUp'
import Dashboard from './components/user/Dashboard'

const App = () => {
  const [user, setUser] = useState({})
  const [errors, setErrors] = useState({})
  const [loggedIn, setLoggedIn] = useState(true)

  // Find User Info
  useEffect(() => {
    if(1) {
      axios.get(`http://localhost:5000/api/v1/users/${1}`)
        .then((response) => {
          setUser(formatUser(response.data))
          response.data.id && setLoggedIn(true)
        })
        .catch((error) => {
          setLoggedIn(false)
          setErrors(error)
        })
    }
  }, [])

  const formatUser = (rawUser) => {
    const formattedUser = {
      id: rawUser.data.id,
      firstName: rawUser.data.attributes.first_name,
      lastName: rawUser.data.attributes.last_name,
      email: rawUser.data.attributes.email,
      role: rawUser.data.attributes.role,
      companyId: rawUser.data.relationships.company.data.id
    }

    return formattedUser
  }

  // Create User
  const createUser = async (newUser) => {
    axios.post('http://localhost:5000/api/v1/users', newUser)
      .then((response) => {
        setUser(formatUser(response.data))
        setLoggedIn(true)
      })
      .catch((error) => {
        console.log(error)
        setErrors(error.response.data)
      })
  }

  return (
    <Router>
    <Routes>
      <Route path='/' element={
        loggedIn ? <Dashboard user={user} /> : <SignUp onAdd={createUser} errors={errors} />
      } />
      { /* <Route path='stores', element={<StoreFront />} />

        ID is passed in automatically
        <Route path=':id', element={<SingleStore />} />
      */ }
  </Routes>
  </Router>
  )
}

export default App
