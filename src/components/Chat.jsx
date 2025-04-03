import { useState, useEffect, useRef } from 'react';

function Chat({ user }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null); // Ref to scroll to the bottom

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { user: user.username, text: input, timestamp: new Date() };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Simulate AI response (replace with real AI integration)
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: 'SokoBot', text: 'Keep spreading positivity!', timestamp: new Date() },
      ]);
      setInput('');
    }
  };

  // Scroll to the bottom every time messages are updated
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chat">
      <h2>Philanthropy Chat</h2>
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.user === user.username ? 'user-message' : 'bot-message'}>
            <p>
              <strong>{msg.user}</strong>: {msg.text} <span className="timestamp">({formatTime(msg.timestamp)})</span>
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* Empty div to scroll to the bottom */}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chat;
