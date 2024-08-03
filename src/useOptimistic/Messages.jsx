import { useState } from 'react';
import { deliverMessage } from '../util/deliverMessage.js';
import { Thread } from './Thread.jsx';

export default function Messages() {
  const [messages, setMessages] = useState([
    { text: 'Hello there!', sending: false, key: 1 },
  ]);

  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get('message'));
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }
  return <Thread messages={messages} sendMessage={sendMessage} />;
}
