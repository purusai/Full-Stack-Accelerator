import React, {useState, useContext} from 'react'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="username" />
      <input type="text" placeholder="password" />
    </div>
  )
}

export default Login
