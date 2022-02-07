const Admin = () => {
  const userNumber = (Math.floor(Math.random() * 1000000) + 100000).toLocaleString('en');
  
  return (
    <div className="admin">
      <h1>Current Users</h1>
      <p>Current active users streaming right now {userNumber}</p>
    </div>
  )
}

export default Admin;
