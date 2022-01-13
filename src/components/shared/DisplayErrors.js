import Error from './DisplayError'

const DisplayErrors = ({ errors }) => {
  function formatErrorMessages() {
    var formatted = errors.error.details.split(': ')
    formatted = formatted[1]

    return formatted.split(', ')
  }

  return (
    <div className='container'>
      <br/>
      <h3>Invalid data, please try again.</h3>
      {formatErrorMessages().map((error) => (
        <Error error={error} />
      ))}
    </div>
  )
}

export default DisplayErrors
