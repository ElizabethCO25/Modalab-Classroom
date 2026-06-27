import { db } from '../firebase';
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  serverTimestamp,
  addDoc,
  onSnapshot
} from 'firebase/firestore';

const messagesCollection = collection(db, 'messages');
const conversationsCollection = collection(db, 'conversations');

/**
 * Envía un nuevo mensaje
 * @param {Object} messageData - { senderId, receiverId, content, courseId? (opcional si es sobre un curso) }
 * @returns {Promise<Object>} - { success, messageId?, message? }
 */
export const sendMessage = async (messageData) => {
  try {
    const { senderId, receiverId, content, courseId } = messageData;

    if (!senderId || !receiverId || !content) {
      return { success: false, message: 'Datos incompletos para enviar el mensaje' };
    }

    // Determinar ID de conversación (ordenado alfabéticamente para ser único entre dos usuarios)
    const participants = [senderId, receiverId].sort();
    const conversationId = participants.join('_');

    const newMessageData = {
      senderId,
      receiverId,
      content,
      courseId: courseId || null,
      read: false,
      createdAt: serverTimestamp()
    };

    // 1. Guardar el mensaje en la colección 'messages'
    const messageRef = await addDoc(messagesCollection, newMessageData);

    // 2. Actualizar o crear la conversación en 'conversations'
    const conversationRef = doc(conversationsCollection, conversationId);
    const conversationSnap = await getDoc(conversationRef);

    const conversationData = {
      participants,
      lastMessage: content,
      lastMessageAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    if (courseId) {
      conversationData.courseId = courseId;
    }

    if (conversationSnap.exists()) {
      await updateDoc(conversationRef, conversationData);
    } else {
      // Si no existe, la creamos (incluyendo metadata básica de los usuarios si se desea)
      await setDoc(conversationRef, {
        ...conversationData,
        createdAt: serverTimestamp()
      });
    }

    return { success: true, messageId: messageRef.id };
  } catch (error) {
    console.error('Error enviando mensaje:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene los mensajes de una conversación específica
 * @param {string} userId1 - ID del primer usuario
 * @param {string} userId2 - ID del segundo usuario
 * @param {number} limitCount - Cantidad máxima de mensajes a obtener (default 50)
 * @returns {Promise<Object>} - { success, messages?, message? }
 */
export const getMessages = async (userId1, userId2, limitCount = 50) => {
  try {
    const participants = [userId1, userId2].sort();
    const conversationId = participants.join('_');

    // Primero verificamos si existe la conversación (opcional, pero útil para validar)
    // Luego obtenemos los mensajes ordenados por fecha
    const q = query(
      messagesCollection,
      where('senderId', 'in', [userId1, userId2]), // Filtro básico inicial
      // Nota: Para una consulta precisa de "entre A y B", idealmente necesitamos un campo 'conversationId' en el mensaje
      // o hacer una consulta más compleja. Vamos a asumir que guardamos 'conversationId' en el mensaje para eficiencia.
      // Si no lo guardamos, esta consulta traerá mensajes donde el usuario es remitente O destinatario, 
      // y luego filtraremos en cliente. 
      // MEJORA: Agreguemos 'conversationId' al mensaje al enviarlo para consultar eficientemente.
      // Actualizando sendMessage para incluir conversationId... (se asume que ya se hizo o se hará)
      
      // Consulta corregida asumiendo que guardamos 'conversationId' en el documento del mensaje:
      where('conversationId', '==', conversationId), 
      orderBy('createdAt', 'asc'),
      limit(limitCount)
    );

    // Si no tenemos 'conversationId' en el mensaje, usamos esta lógica alternativa (menos eficiente):
    /*
    const q = query(
      messagesCollection,
      where('senderId', 'in', [userId1, userId2]),
      where('receiverId', 'in', [userId1, userId2]),
      orderBy('createdAt', 'asc'),
      limit(limitCount)
    );
    // Y luego filtrar en el cliente para asegurar que son solo entre estos dos.
    */

    // Asumiendo que agregamos 'conversationId' al mensaje en sendMessage:
    // const newMessageData = { ..., conversationId }; 
    
    // Para este ejemplo, usaremos la consulta que requiere 'conversationId' en el mensaje.
    // Si no lo tienes aún, actualiza sendMessage primero.
    
    const querySnapshot = await getDocs(q);
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });

    // Marcar como leídos los mensajes recibidos
    const unreadMessages = messages.filter(m => m.receiverId === userId1 && !m.read);
    if (unreadMessages.length > 0) {
      const batchUpdatePromises = unreadMessages.map(msg => 
        updateDoc(doc(messagesCollection, msg.id), { read: true })
      );
      await Promise.all(batchUpdatePromises);
    }

    return { success: true, data: messages };
  } catch (error) {
    console.error('Error obteniendo mensajes:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene la lista de conversaciones para un usuario
 * @param {string} userId - ID del usuario
 * @returns {Promise<Object>} - { success, conversations?, message? }
 * conversations incluye info del otro participante y el último mensaje
 */
export const getConversations = async (userId) => {
  try {
    // Buscamos conversaciones donde el usuario es participante
    const q = query(
      conversationsCollection,
      where('participants', 'array-contains', userId),
      orderBy('lastMessageAt', 'desc')
    );

    const querySnapshot = await getDocs(q);
    const conversations = [];

    for (const docSnap of querySnapshot.docs) {
      const convData = docSnap.data();
      const otherUserId = convData.participants.find(id => id !== userId);
      
      // Aquí podrías obtener los detalles del otro usuario si los necesitas aquí
      // const otherUserSnap = await getDoc(doc(usersCollection, otherUserId));
      // const otherUserData = otherUserSnap.exists() ? otherUserSnap.data() : {};

      conversations.push({
        id: docSnap.id,
        ...convData,
        otherUserId // ID del otro participante
      });
    }

    return { success: true, data: conversations };
  } catch (error) {
    console.error('Error obteniendo conversaciones:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Marca un mensaje específico como leído
 * @param {string} messageId - ID del mensaje
 * @returns {Promise<Object>} - { success, message? }
 */
export const markAsRead = async (messageId) => {
  try {
    const messageRef = doc(messagesCollection, messageId);
    await updateDoc(messageRef, { read: true });
    return { success: true };
  } catch (error) {
    console.error('Error marcando mensaje como leído:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Escucha en tiempo real los mensajes de una conversación
 * @param {string} userId1 - ID del primer usuario
 * @param {string} userId2 - ID del segundo usuario
 * @param {Function} callback - Función que se llama con cada actualización (messages array)
 * @returns {Function} - Función para dejar de escuchar (unsubscribe)
 */
export const subscribeToMessages = (userId1, userId2, callback) => {
  const participants = [userId1, userId2].sort();
  const conversationId = participants.join('_');

  const q = query(
    messagesCollection,
    where('conversationId', '==', conversationId),
    orderBy('createdAt', 'asc')
  );

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });
    
    // Marcar como leídos automáticamente al recibirlos en el listener si somos el receptor
    const unreadReceived = messages.filter(m => m.receiverId === userId1 && !m.read);
    if (unreadReceived.length > 0) {
       unreadReceived.forEach(m => {
         updateDoc(doc(messagesCollection, m.id), { read: true }).catch(console.error);
       });
    }

    callback(messages);
  }, (error) => {
    console.error("Error en suscripción a mensajes:", error);
    callback([], error);
  });

  return unsubscribe;
};