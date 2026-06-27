import { db } from '../firebase';
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  addDoc,
  Timestamp
} from 'firebase/firestore';

const eventsCollection = collection(db, 'events');

/**
 * Crea un nuevo evento en el calendario
 * @param {Object} eventData - { title, description, courseId?, type (assignment/exam/event), startDate, endDate, location?, creatorId }
 * @returns {Promise<Object>} - { success, eventId?, message? }
 */
export const createEvent = async (eventData) => {
  try {
    const newEventRef = await addDoc(eventsCollection, {
      ...eventData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    return { success: true, eventId: newEventRef.id, message: 'Evento creado exitosamente' };
  } catch (error) {
    console.error('Error creando evento:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene un evento por su ID
 * @param {string} eventId - ID del evento
 * @returns {Promise<Object>} - { success, data?, message? }
 */
export const getEvent = async (eventId) => {
  try {
    const docRef = doc(eventsCollection, eventId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, data: docSnap.data() };
    } else {
      return { success: false, message: 'Evento no encontrado' };
    }
  } catch (error) {
    console.error('Error obteniendo evento:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene todos los eventos de un curso específico
 * @param {string} courseId - ID del curso
 * @returns {Promise<Object>} - { success, events?, message? }
 */
export const getEventsByCourse = async (courseId) => {
  try {
    const q = query(
      eventsCollection, 
      where('courseId', '==', courseId),
      orderBy('startDate', 'asc')
    );
    const querySnapshot = await getDocs(q);
    const events = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: events };
  } catch (error) {
    console.error('Error obteniendo eventos por curso:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene eventos próximos para un usuario (basado en sus cursos o eventos generales)
 * @param {string} userId - ID del usuario
 * @param {number} daysAhead - Días hacia adelante para buscar (default 30)
 * @returns {Promise<Object>} - { success, events?, message? }
 */
export const getUpcomingEvents = async (userId, daysAhead = 30) => {
  try {
    // Nota: Esta es una implementación simplificada. 
    // En una app real, necesitarías primero obtener los IDs de los cursos del usuario.
    // Aquí asumimos que buscamos eventos generales o que el filtrado se hace en el frontend.
    
    const now = Timestamp.now();
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + daysAhead);
    const futureTimestamp = Timestamp.fromDate(futureDate);

    const q = query(
      eventsCollection,
      where('startDate', '>=', now),
      where('startDate', '<=', futureTimestamp),
      orderBy('startDate', 'asc')
    );

    const querySnapshot = await getDocs(q);
    const events = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, data: events };
  } catch (error) {
    console.error('Error obteniendo eventos próximos:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Actualiza un evento existente
 * @param {string} eventId - ID del evento
 * @param {Object} updatedData - Datos a actualizar
 * @returns {Promise<Object>} - { success, message? }
 */
export const updateEvent = async (eventId, updatedData) => {
  try {
    const docRef = doc(eventsCollection, eventId);
    await updateDoc(docRef, {
      ...updatedData,
      updatedAt: Timestamp.now()
    });
    return { success: true, message: 'Evento actualizado exitosamente' };
  } catch (error) {
    console.error('Error actualizando evento:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Elimina un evento
 * @param {string} eventId - ID del evento
 * @returns {Promise<Object>} - { success, message? }
 */
export const deleteEvent = async (eventId) => {
  try {
    await deleteDoc(doc(eventsCollection, eventId));
    return { success: true, message: 'Evento eliminado exitosamente' };
  } catch (error) {
    console.error('Error eliminando evento:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene todos los eventos (útil para administradores o vistas globales)
 * @returns {Promise<Object>} - { success, events?, message? }
 */
export const getAllEvents = async () => {
  try {
    const q = query(eventsCollection, orderBy('startDate', 'asc'));
    const querySnapshot = await getDocs(q);
    const events = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: events };
  } catch (error) {
    console.error('Error obteniendo todos los eventos:', error);
    return { success: false, message: error.message };
  }
};