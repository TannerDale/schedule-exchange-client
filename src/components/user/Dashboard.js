const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>{user.id !== undefined && `${user.firstName} ${user.lastName}`}</h1>
    </div>
  )
}

export default Dashboard
