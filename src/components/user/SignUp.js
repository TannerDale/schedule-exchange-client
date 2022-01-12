import { useState } from 'react'

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [companyId, setCompanyId] = useState(0)
  const [companyPassword, setCompanyPassword] = useState('')

  const formOption = (type, placeholder, value, method) => {
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
      <form className='create-user-form'>

        {formOption('text', 'First Name', firstName, setFirstName)}

        {formOption('text', 'Last Name', lastName, setLastName)}

        {formOption('text', 'Email', email, setEmail)}

        {formOption('password', 'Password', password, setPassword)}

        {formOption('password', 'Confirm Password', passwordConfirmation, setPasswordConfirmation)}

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

        {formOption('password', 'Company Password', companyPassword, setCompanyPassword)}

        <input type='submit' value='Sign Up' className='btn btn-outline-primary float-start' />
      </form>
    </div>
  )
}

export default SignUp
