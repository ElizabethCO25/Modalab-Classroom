import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getConversations, sendMessage, subscribeToMessages } from '../services/messageService';
import { getUserPreview } from '../services/profileService';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MessageThread from '../components/MessageThread';
import './Messages.css';

const Messages = () => {
  const { currentUser } = useAuth();
  const [conversations, setConversations] = useState([]);
  const [selectedConvId, setSelectedConvId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Estado para la conversación activa (mensajes en tiempo real)
  const [activeMessages, setActiveMessages] = useState([]);
  const [otherUserCache, setOtherUserCache] = useState({}); // Cache para no pedir siempre los datos del otro usuario

  useEffect(() => {
    if (!currentUser) return;

    const loadConversations = async () => {
      try {
        setLoading(true);
        const result = await getConversations(currentUser.uid);
        
        if (result.success) {
          // Enriquecer conversaciones con datos del otro usuario
          const enrichedConvs = await Promise.all(result.conversations.map(async (conv) => {
            const otherId = conv.participants.find(p => p !== currentUser.uid);
            
            // Usar caché o buscar
            let otherUserData = otherUserCache[otherId];
            if (!otherUserData) {
              const userResult = await getUserPreview(otherId);
              if (userResult.success) {
                otherUserData = userResult.data;
                setOtherUserCache(prev => ({ ...prev, [otherId]: otherUserData }));
              }
            }

            return {
              ...conv,
              otherUserId: otherId,
              otherUserName: otherUserData?.displayName || 'Usuario',
              otherUserPhoto: otherUserData?.photoURL
            };
          }));

          setConversations(enrichedConvs);
        } else {
          setError(result.message);
        }
      } catch (err) {
        console.error('Error cargando conversaciones:', err);
        setError('No se pudieron cargar las conversaciones.');
      } finally {
        setLoading(false);
      }
    };

    loadConversations();
  }, [currentUser]);

  // Suscribirse a mensajes en tiempo real cuando hay una conversación seleccionada
  useEffect(() => {
    let unsubscribe = null;

    if (selectedConvId && currentUser) {
      const conversation = conversations.find(c => c.id === selectedConvId);
      if (conversation) {
        const otherId = conversation.otherUserId;
        
        unsubscribe = subscribeToMessages(currentUser.uid, otherId, (msgs, err) => {
          if (err) {
            console.error(err);
          } else {
            setActiveMessages(msgs);
          }
        });
      }
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [selectedConvId, currentUser, conversations]);

  const handleSendMessage = async (convId, text) => {
    const conversation = conversations.find(c => c.id === convId);
    if (!conversation) return;

    const result = await sendMessage({
      senderId: currentUser.uid,
      receiverId: conversation.otherUserId,
      content: text,
      courseId: conversation.courseId // Si existe
    });

    if (!result.success) {
      alert('Error al enviar: ' + result.message);
    }
    // El mensaje aparecerá automáticamente gracias al listener en tiempo real
  };

  const renderContent = () => {
    if (loading) {
      return <div className="loading-state">Cargando mensajes...</div>;
    }

    if (error) {
      return <div className="error-state">{error}</div>;
    }

    if (selectedConvId) {
      const activeConv = conversations.find(c => c.id === selectedConvId);
      if (!activeConv) return <div>Conversación no encontrada</div>;

      return (
        <MessageThread 
          conversationId={activeConv.id}
          otherUserId={activeConv.otherUserId}
          otherUserName={activeConv.otherUserName}
          initialMessages={activeMessages}
          onBack={() => setSelectedConvId(null)}
          onSendMessage={handleSendMessage}
        />
      );
    }

    // Vista de lista de conversaciones
    return (
      <div className="conversations-list-view">
        <h2>Mis Mensajes</h2>
        {conversations.length === 0 ? (
          <p>No tienes conversaciones activas.</p>
        ) : (
          <ul className="conversations-list">
            {conversations.map(conv => (
              <li 
                key={conv.id} 
                className="conversation-item"
                onClick={() => setSelectedConvId(conv.id)}
              >
                <div className="conv-avatar">
                  {conv.otherUserPhoto ? (
                    <img src={conv.otherUserPhoto} alt={conv.otherUserName} />
                  ) : (
                    <span>{conv.otherUserName.charAt(0).toUpperCase()}</span>
                  )}
                </div>
                <div className="conv-info">
                  <div className="conv-header">
                    <strong>{conv.otherUserName}</strong>
                    <span className="conv-time">
                      {conv.lastMessageAt?.toDate 
                        ? conv.lastMessageAt.toDate().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}) 
                        : ''}
                    </span>
                  </div>
                  <p className="conv-preview">{conv.lastMessage}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content messages-page">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Messages;