import { db } from '../firebase';
import {
  collection,
  doc,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where
} from 'firebase/firestore';

const usersCollection = collection(db, 'users');

/**
 * Crea un nuevo usuario en Firestore
 * @param {Object} userData - Datos del usuario
 * @returns {Promise<string>} - ID del documento creado
 */
export const createUser = async (userData) => {
  try {
    const docRef = await addDoc(usersCollection, {
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creando usuario:', error);
    throw error;
  }
};

/**
 * Obtiene un usuario por su ID
 * @param {string} userId - ID del usuario
 * @returns {Promise<Object|null>} - Datos del usuario o null
 */
export const getUser = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() };
    }
    return null;
  } catch (error) {
    console.error('Error obteniendo usuario:', error);
    throw error;
  }
};

/**
 * Actualiza los datos de un usuario
 * @param {string} userId - ID del usuario
 * @param {Object} userData - Datos a actualizar
 * @returns {Promise<void>}
 */
export const updateUser = async (userId, userData) => {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      ...userData,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error actualizando usuario:', error);
    throw error;
  }
};

/**
 * Elimina un usuario
 * @param {string} userId - ID del usuario
 * @returns {Promise<void>}
 */
export const deleteUser = async (userId) => {
  try {
    await deleteDoc(doc(db, 'users', userId));
  } catch (error) {
    console.error('Error eliminando usuario:', error);
    throw error;
  }
};

/**
 * Obtiene todos los usuarios
 * @returns {Promise<Array>} - Lista de usuarios
 */
export const getAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(usersCollection);
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  } catch (error) {
    console.error('Error obteniendo todos los usuarios:', error);
    throw error;
  }
};

/**
 * Obtiene usuarios por rol
 * @param {string} role - Rol del usuario ('admin' o 'student')
 * @returns {Promise<Array>} - Lista de usuarios filtrados
 */
export const getUsersByRole = async (role) => {
  try {
    const q = query(usersCollection, where('role', '==', role));
    const querySnapshot = await getDocs(q);
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  } catch (error) {
    console.error('Error obteniendo usuarios por rol:', error);
    throw error;
  }
};

/**
 * Obtiene usuario por email
 * @param {string} email - Email del usuario
 * @returns {Promise<Object|null>} - Datos del usuario o null
 */
export const getUserByEmail = async (email) => {
  try {
    const q = query(usersCollection, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    }
    return null;
  } catch (error) {
    console.error('Error obteniendo usuario por email:', error);
    throw error;
  }
};
