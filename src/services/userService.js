import { db } from '../firebase';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';

const usersCollection = collection(db, 'users');

/**
 * Crea un nuevo usuario en Firestore
 * @param {string} uid - ID del usuario (de Firebase Auth)
 * @param {Object} userData - Datos del usuario {email, role, name, enrolledCourses, createdAt}
 */
export const createUser = async (uid, userData) => {
  try {
    await setDoc(doc(usersCollection, uid), {
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return { success: true, message: 'Usuario creado exitosamente' };
  } catch (error) {
    console.error('Error creando usuario:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene los datos de un usuario por su UID
 * @param {string} uid - ID del usuario
 */
export const getUser = async (uid) => {
  try {
    const docRef = doc(usersCollection, uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, data: docSnap.data() };
    } else {
      return { success: false, message: 'Usuario no encontrado' };
    }
  } catch (error) {
    console.error('Error obteniendo usuario:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Actualiza los datos de un usuario
 * @param {string} uid - ID del usuario
 * @param {Object} updatedData - Datos a actualizar
 */
export const updateUser = async (uid, updatedData) => {
  try {
    const docRef = doc(usersCollection, uid);
    await updateDoc(docRef, {
      ...updatedData,
      updatedAt: new Date().toISOString()
    });
    return { success: true, message: 'Usuario actualizado exitosamente' };
  } catch (error) {
    console.error('Error actualizando usuario:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Elimina un usuario de Firestore
 * @param {string} uid - ID del usuario
 */
export const deleteUser = async (uid) => {
  try {
    await deleteDoc(doc(usersCollection, uid));
    return { success: true, message: 'Usuario eliminado exitosamente' };
  } catch (error) {
    console.error('Error eliminando usuario:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene todos los usuarios
 */
export const getAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(usersCollection);
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: users };
  } catch (error) {
    console.error('Error obteniendo usuarios:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene usuarios por rol (admin o student)
 * @param {string} role - Rol del usuario
 */
export const getUsersByRole = async (role) => {
  try {
    const q = query(usersCollection, where('role', '==', role));
    const querySnapshot = await getDocs(q);
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: users };
  } catch (error) {
    console.error('Error obteniendo usuarios por rol:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene un usuario por su email
 * @param {string} email - Email del usuario
 */
export const getUserByEmail = async (email) => {
  try {
    const q = query(usersCollection, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { success: true, data: { id: doc.id, ...doc.data() } };
    } else {
      return { success: false, message: 'Usuario no encontrado' };
    }
  } catch (error) {
    console.error('Error obteniendo usuario por email:', error);
    return { success: false, message: error.message };
  }
};