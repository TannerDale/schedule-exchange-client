const DisplayError = ({ error, index }) => {
  return (
    <div className="alert alert-warning" role="alert" id={`error-${index}`}>
      {error}
    </div>
  )
}

export default DisplayError
