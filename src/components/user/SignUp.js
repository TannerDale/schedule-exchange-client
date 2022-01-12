import { useState } from 'react'

const SignUp = ({ onAdd }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [companyId, setCompanyId] = useState(0)
  const [companyPassword, setCompanyPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    var unfilled = [
      firstName,
      lastName,
      email,
      password,
      passwordConfirmation,
      companyId,
      companyPassword
    ].filter((field) => !field )

    if(unfilled.length > 0) {
      alert('Please fill in all fields')
      return
    }

    onAdd({ firstName, lastName, email, password, passwordConfirmation, companyId, companyPassword })

    clearForm()
  }

  function clearForm() {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setPasswordConfirmation('')
    setCompanyId(0)
    setCompanyPassword('')
  }

  const formField = (type, placeholder, value, method) => {
    return (
      <div className='form-floating mb-3'>
        <input
          type={type}
          className='form-control'
          id='floatingInput'
          placeholder={placeholder}
          value={value}
          onChange={(e) => method(e.target.value)}
        />
        <label htmlFor='floatingInput'>{placeholder}</label>
      </div>
    )
  }

  return (
    <div className='container'>
      <form className='create-user-form' onSubmit={onSubmit}>

        {formField('text', 'First Name', firstName, setFirstName)}

        {formField('text', 'Last Name', lastName, setLastName)}

        {formField('text', 'Email', email, setEmail)}

        {formField('password', 'Password', password, setPassword)}

        {formField('password', 'Confirm Password', passwordConfirmation, setPasswordConfirmation)}

        <div className='form-control'>
          <label className='float-start'>Company ID</label>
          <input
            type='number'
            min='0'
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
          />
        </div>
        <br/>

        {formField('password', 'Company Password', companyPassword, setCompanyPassword)}

        <input type='submit' value='Sign Up' className='btn btn-outline-primary float-start' />
      </form>
    </div>
  )
}

export default SignUp
