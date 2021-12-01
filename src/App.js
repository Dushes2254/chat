import { ChatEngine } from 'react-chat-engine'

import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID="77feb64c-228c-438f-b0b2-9d211c9545c7"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
