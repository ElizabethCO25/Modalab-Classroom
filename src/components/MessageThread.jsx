import React, { useState, useEffect, useRef } from 'react';
import { sendMessage } from '../services/messageService';
import { useAuth } from '../contexts/AuthContext';
import './MessageThread.css';

/**
 * Componente para mostrar el hilo completo de una conversación
 * y permitir enviar nuevos mensajes.
 * 
 * @param {string} conversationId - ID de la conversación (o usuario receptor si es nueva)
 * @param {string} otherUserId - ID del otro usuario en la conversación
 * @param {string} otherUserName - Nombre del otro usuario
 * @param {Array} initialMessages - Mensajes iniciales cargados
 * @param {Function} onBack - Callback para volver a la lista
 */
const MessageThread = ({ 
  conversationId, 
  otherUserId, 
  otherUserName, 
  initialMessages = [],
  onBack 
}) => {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll al último mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Actualizar lista si cambian los mensajes iniciales (ej. carga asíncrona)
  useEffect(() => {
    if (initialMessages.length > 0) {
      setMessages(initialMessages);
    }
  }, [initialMessages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !otherUserId) return;

    setSending(true);
    
    // Optimistic UI: Agregar mensaje localmente antes de confirmar
    const tempMessage = {
      id: 'temp-' + Date.now(),
      senderId: currentUser.uid,
      receiverId: otherUserId,
      text: newMessage.trim(),
      timestamp: new Date(),
      read: false
    };

    setMessages(prev => [...prev, tempMessage]);
    setNewMessage('');

    const result = await sendMessage({
      senderId: currentUser.uid,
      receiverId: otherUserId,
      content: tempMessage.text,
      conversationId: conversationId // Si existe
    });

    setSending(false);

    if (!result.success) {
      // Revertir mensaje si falló el envío
      setMessages(prev => prev.filter(m => m.id !== tempMessage.id));
      alert('Error al enviar: ' + result.message);
    }
    // Si tiene éxito, el listener en tiempo real (si se usa) o una recarga manual actualizará el ID real
  };

  return (
    <div className="message-thread-container">
      {/* Cabecera del hilo */}
      <div className="thread-header">
        <button onClick={onBack} className="btn-back" aria-label="Volver">
          ←
        </button>
        <div className="thread-user-info">
          <h3>{otherUserName}</h3>
          <span className="status-indicator online"></span>
        </div>
      </div>

      {/* Lista de mensajes */}
      <div className="thread-messages-list">
        {messages.length === 0 ? (
          <div className="empty-thread">
            <p>No hay mensajes aún. ¡Inicia la conversación!</p>
          </div>
        ) : (
          messages.map((msg, index) => {
            const isMe = msg.senderId === currentUser.uid;
            const showAvatar = index === 0 || messages[index - 1].senderId !== msg.senderId;
            const timestamp = msg.timestamp?.toDate ? msg.timestamp.toDate() : new Date(msg.timestamp);

            return (
              <div 
                key={msg.id} 
                className={`message-row ${isMe ? 'message-mine' : 'message-theirs'}`}
              >
                {!isMe && showAvatar && (
                  <div className="message-avatar">
                    {/* Aquí iría la foto del usuario si estuviera disponible */}
                    <span>{otherUserName.charAt(0).toUpperCase()}</span>
                  </div>
                )}
                {!isMe && !showAvatar && <div className="message-avatar-spacer"></div>}

                <div className="message-content-wrapper">
                  {!isMe && showAvatar && (
                    <span className="message-sender-name">{otherUserName}</span>
                  )}
                  
                  <div className="message-bubble">
                    <p>{msg.text}</p>
                  </div>
                  
                  <span className="message-meta">
                    {timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    {isMe && (
                      <span className="read-status">
                        {msg.read ? '✓✓' : '✓'}
                      </span>
                    )}
                  </span>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input de envío */}
      <form onSubmit={handleSend} className="thread-input-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          disabled={sending}
          className="thread-input"
          autoComplete="off"
        />
        <button 
          type="submit" 
          disabled={!newMessage.trim() || sending}
          className="thread-send-btn"
        >
          {sending ? '...' : '➤'}
        </button>
      </form>
    </div>
  );
};

export default MessageThread;