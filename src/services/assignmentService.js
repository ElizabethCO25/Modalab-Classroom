import { db } from '../firebase';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore';

const assignmentsCollection = collection(db, 'assignments');

/**
 * Crea una nueva tarea/actividad
 * @param {Object} assignmentData - Datos de la tarea {title, description, courseId, dueDate, maxGrade, attachments, instructions}
 */
export const createAssignment = async (assignmentData) => {
  try {
    const newAssignmentRef = doc(assignmentsCollection);
    await setDoc(newAssignmentRef, {
      ...assignmentData,
      attachments: assignmentData.attachments || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return { success: true, assignmentId: newAssignmentRef.id, message: 'Tarea creada exitosamente' };
  } catch (error) {
    console.error('Error creando tarea:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene los datos de una tarea por su ID
 * @param {string} assignmentId - ID de la tarea
 */
export const getAssignment = async (assignmentId) => {
  try {
    const docRef = doc(assignmentsCollection, assignmentId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, data: docSnap.data() };
    } else {
      return { success: false, message: 'Tarea no encontrada' };
    }
  } catch (error) {
    console.error('Error obteniendo tarea:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Actualiza los datos de una tarea
 * @param {string} assignmentId - ID de la tarea
 * @param {Object} updatedData - Datos a actualizar
 */
export const updateAssignment = async (assignmentId, updatedData) => {
  try {
    const docRef = doc(assignmentsCollection, assignmentId);
    await updateDoc(docRef, {
      ...updatedData,
      updatedAt: new Date().toISOString()
    });
    return { success: true, message: 'Tarea actualizada exitosamente' };
  } catch (error) {
    console.error('Error actualizando tarea:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Elimina una tarea
 * @param {string} assignmentId - ID de la tarea
 */
export const deleteAssignment = async (assignmentId) => {
  try {
    await deleteDoc(doc(assignmentsCollection, assignmentId));
    return { success: true, message: 'Tarea eliminada exitosamente' };
  } catch (error) {
    console.error('Error eliminando tarea:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene todas las tareas de un curso
 * @param {string} courseId - ID del curso
 */
export const getAssignmentsByCourse = async (courseId) => {
  try {
    const q = query(
      assignmentsCollection, 
      where('courseId', '==', courseId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const assignments = [];
    querySnapshot.forEach((doc) => {
      assignments.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: assignments };
  } catch (error) {
    console.error('Error obteniendo tareas por curso:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene tareas pendientes por fecha de entrega
 * @param {string} courseId - ID del curso
 */
export const getPendingAssignments = async (courseId) => {
  try {
    const now = new Date().toISOString();
    const q = query(
      assignmentsCollection, 
      where('courseId', '==', courseId),
      where('dueDate', '>=', now),
      orderBy('dueDate', 'asc')
    );
    const querySnapshot = await getDocs(q);
    const assignments = [];
    querySnapshot.forEach((doc) => {
      assignments.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: assignments };
  } catch (error) {
    console.error('Error obteniendo tareas pendientes:', error);
    return { success: false, message: error.message };
  }
};