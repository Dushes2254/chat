import { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const authObject = {
      'Project-ID': '77feb64c-228c-438f-b0b2-9d211c9545c7',
      'User-Name': username,
      'User-Secret': password,
    }

    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      })
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)

      window.location.reload()
    } catch (error) {
      setError('Something wrong!')
    }
  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            className="input"
            placeholder="username"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            value={password}
            className="input"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chating</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
