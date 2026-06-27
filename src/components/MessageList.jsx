import React from 'react';
import './Messages.css';

/**
 * Componente para mostrar una lista de conversaciones o mensajes
 * @param {Array} messages - Array de objetos mensaje o conversación
 * @param {string} currentUserId - ID del usuario actual
 * @param {Function} onMessageClick - Callback cuando se hace clic en un mensaje/conversación
 * @param {Function} onSendMessage - (Opcional) Callback para enviar respuesta rápida
 */
const MessageList = ({ 
  conversations = [], 
  currentUserId, 
  onConversationClick,
  loading = false 
}) => {
  
  // Formatear fecha relativa (hace X minutos/horas/días)
  const formatRelativeTime = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'Ahora';
    if (diffInSeconds < 3600) return `Hace ${Math.floor(diffInSeconds / 60)} min`;
    if (diffInSeconds < 86400) return `Hace ${Math.floor(diffInSeconds / 3600)} h`;
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="message-list-loading">
        <div className="spinner-small"></div>
        <p>Cargando conversaciones...</p>
      </div>
    );
  }

  if (!conversations || conversations.length === 0) {
    return (
      <div className="message-list-empty">
        <p>No tienes conversaciones activas.</p>
        <small>Los mensajes que envíes aparecerán aquí.</small>
      </div>
    );
  }

  return (
    <div className="message-list-container">
      <ul className="message-list">
        {conversations.map((conv) => {
          // Determinar si el último mensaje no ha sido leído por el usuario actual
          // Nota: Esto asume que 'conv' tiene una propiedad 'unreadCount' o lógica similar
          // En una implementación completa, esto vendría del servicio.
          // Aquí asumimos simplificación: si hay último mensaje y no es del usuario actual, podría ser no leído.
          const isUnread = conv.lastMessageSenderId !== currentUserId; 
          
          return (
            <li 
              key={conv.id} 
              className={`message-item ${isUnread ? 'unread' : ''}`}
              onClick={() => onConversationClick(conv)}
            >
              <div className="message-avatar">
                {/* Aquí podrías cargar la foto del otro usuario si estuviera disponible en conv */}
                <span className="avatar-placeholder">
                  {conv.otherUserName ? conv.otherUserName.charAt(0).toUpperCase() : '?'}
                </span>
              </div>
              
              <div className="message-content">
                <div className="message-header">
                  <h4 className="message-sender">
                    {conv.otherUserName || 'Usuario desconocido'}
                  </h4>
                  <span className="message-time">
                    {formatRelativeTime(conv.lastMessageAt)}
                  </span>
                </div>
                
                <p className="message-preview">
                  {conv.lastMessage}
                </p>
                
                {conv.courseName && (
                  <span className="message-course-tag">
                    📚 {conv.courseName}
                  </span>
                )}
              </div>

              {isUnread && <span className="unread-indicator"></span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MessageList;