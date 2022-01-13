const DisplayError = ({ error }) => {
  return (
    <div className="alert alert-warning" role="alert">
      {error}
    </div>
  )
}

export default DisplayError
