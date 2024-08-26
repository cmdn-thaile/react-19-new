import { useState } from 'react';
import { deliverMessage } from '../util/deliverMessage.js';
import { Thread } from './Thread.jsx';

export default function Messages() {
  const [messages, setMessages] = useState([
    { text: 'Hello there!', sending: false, key: 1 },
  ]);

  const [error, setError] = useState('');

  async function sendMessage(formData) {
    try {
      const sentMessage = await deliverMessage(formData.get('message'));
      setMessages((messages) => [...messages, { text: sentMessage }]);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Error sending message');
    }
  }

  return (
    <>
      <h1 className="title">useOptimistic</h1>
      <Thread messages={messages} sendMessage={sendMessage} />
      {error && <p>{error}</p>}
    </>
  );
}
