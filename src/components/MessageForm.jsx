import { useState } from 'react'

import { sendMessage, isTyping } from 'react-chat-engine'
import { SendOutlined } from '@ant-design/icons'

const MessageForm = (props) => {
  const [value, setValue] = useState('')
  const { activeChat, creds } = props

  const handleSubmit = (event) => {
    event.preventDefault()

    const text = value.trim()

    if (text.length > 0) sendMessage(creds, activeChat, { text })

    setValue('')
  }

  const handleChange = (event) => {
    setValue(event.target.value)
    isTyping(props, activeChat)
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  )
}

export default MessageForm
