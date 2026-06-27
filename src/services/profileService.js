import { db, storage, auth } from '../firebase';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile as updateAuthProfile } from 'firebase/auth';

const usersCollection = doc(db, 'users');

/**
 * Obtiene el perfil completo de un usuario
 * @param {string} uid - ID del usuario
 * @returns {Promise<Object>} - { success, data?, message? }
 */
export const getProfile = async (uid) => {
  try {
    const userRef = doc(usersCollection, uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return { success: true, data: userSnap.data() };
    } else {
      // Si no existe en Firestore pero sí en Auth, creamos un perfil básico
      const currentUser = auth.currentUser;
      if (currentUser && currentUser.uid === uid) {
        const defaultData = {
          email: currentUser.email,
          displayName: currentUser.displayName || 'Usuario',
          photoURL: currentUser.photoURL,
          role: 'student', // Rol por defecto
          createdAt: new Date().toISOString()
        };
        await setDoc(userRef, defaultData);
        return { success: true, data: defaultData };
      }
      return { success: false, message: 'Perfil no encontrado' };
    }
  } catch (error) {
    console.error('Error obteniendo perfil:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Actualiza la información del perfil del usuario
 * @param {string} uid - ID del usuario
 * @param {Object} profileData - Datos a actualizar {displayName, bio, phone, location, etc.}
 * @returns {Promise<Object>} - { success, message? }
 */
export const updateProfile = async (uid, profileData) => {
  try {
    const userRef = doc(usersCollection, uid);
    
    // Actualizar en Firestore
    await updateDoc(userRef, {
      ...profileData,
      updatedAt: new Date().toISOString()
    });

    // Si se actualiza el nombre o foto, sincronizar con Firebase Auth
    const updates = {};
    if (profileData.displayName) updates.displayName = profileData.displayName;
    if (profileData.photoURL) updates.photoURL = profileData.photoURL;

    if (Object.keys(updates).length > 0 && auth.currentUser) {
      await updateAuthProfile(auth.currentUser, updates);
    }

    return { success: true, message: 'Perfil actualizado exitosamente' };
  } catch (error) {
    console.error('Error actualizando perfil:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Sube una nueva foto de perfil a Storage y actualiza el perfil
 * @param {string} uid - ID del usuario
 * @param {File} file - Archivo de imagen
 * @returns {Promise<Object>} - { success, photoURL?, message? }
 */
export const uploadProfilePicture = async (uid, file) => {
  try {
    // Validar que sea imagen
    if (!file.type.startsWith('image/')) {
      return { success: false, message: 'El archivo debe ser una imagen' };
    }

    // Ruta única para la foto de perfil
    const storageRef = ref(storage, `profiles/${uid}/avatar_${Date.now()}`);
    
    // Subir archivo
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    // Actualizar el perfil con la nueva URL
    await updateProfile(uid, { photoURL: downloadURL });

    return { success: true, photoURL: downloadURL, message: 'Foto de perfil actualizada' };
  } catch (error) {
    console.error('Error subiendo foto de perfil:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene los datos básicos de un usuario para mostrar en tarjetas o listas
 * @param {string} uid - ID del usuario
 * @returns {Promise<Object>} - { success, data: {displayName, photoURL, role}?, message? }
 */
export const getUserPreview = async (uid) => {
  try {
    const userRef = doc(usersCollection, uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const data = userSnap.data();
      return { 
        success: true, 
        data: {
          displayName: data.displayName || 'Usuario',
          photoURL: data.photoURL,
          role: data.role,
          email: data.email
        } 
      };
    }
    return { success: false, message: 'Usuario no encontrado' };
  } catch (error) {
    console.error('Error obteniendo vista previa del usuario:', error);
    return { success: false, message: error.message };
  }
};