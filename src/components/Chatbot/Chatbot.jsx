import { useState, useEffect, useRef } from 'react';
import { furiaStats, getBotResponse } from './config';
import './chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Mensagem inicial quando aberto
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      handleBotResponse(
        `🦁 Olá torcedor da FURIA!\n\n` +
        `Eu sou o FuriBot, seu assistente virtual. Posso te ajudar com:\n\n` +
        `• Informações sobre o time de CS2\n` +
        `• Estatísticas e resultados\n` +
        `• Próximos jogos e eventos\n` +
        `• Nosso aplicativo oficial\n` +
        `• Links para nossas redes sociais\n\n` +
        `Pergunte o que quiser sobre a FURIA!`
      );
    }
  }, [isOpen]);

  // Rolagem automática
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleBotResponse = (message) => {
    const newMessage = {
      text: message,
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleQuickAction = (action) => {
    setInputValue(action);
    handleSend(action);
  };

  const handleSend = (customMessage) => {
    const messageToSend = customMessage || inputValue;
    if (!messageToSend.trim()) return;
    
    // Adiciona mensagem do usuário
    const userMessage = {
      text: messageToSend,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    if (!customMessage) setInputValue('');
    setIsTyping(true);
    
    // Simula tempo de digitação
    setTimeout(() => {
      const response = getBotResponse(messageToSend);
      handleBotResponse(response);
      setIsTyping(false);
    }, 800 + Math.random() * 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  // Ações rápidas
  const quickActions = [
    "Time atual",
    "Próximos jogos",
    "Últimos resultados",
    "Nosso aplicativo",
    "Redes sociais"
  ];

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <img src="/assets/images/Logo.png" alt="FURIA Logo" className="chatbot-logo" />
              <h3>FuriBot - CS2</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="chatbot-close">
              ×
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <div className="message-content">
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                <span className="message-time">{msg.timestamp}</span>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="quick-actions">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="quick-action"
                onClick={() => handleQuickAction(action)}
                disabled={isTyping}
              >
                {action}
              </button>
            ))}
          </div>
          
          <div className="chatbot-input-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Pergunte sobre a FURIA..."
              disabled={isTyping}
              className="chatbot-input"
            />
            <button 
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || isTyping}
              className="chatbot-send-button"
            >
              →
            </button>
          </div>
        </div>
      )}

      <button 
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir chat"
      >
        {isOpen ? (
          '×'
        ) : (
          <img src="/assets/images/Logo.png" alt="Chat FURIA" />
        )}
      </button>
    </div>
  );
}
