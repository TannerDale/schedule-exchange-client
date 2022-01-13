const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>{user.id && `${user.firstName} ${user.lastName}`}</h1>
    </div>
  )
}

export default Dashboard
