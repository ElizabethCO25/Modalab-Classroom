import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject, listAll, getMetadata } from 'firebase/storage';

/**
 * Sube un archivo a Firebase Storage
 * @param {File} file - El archivo a subir
 * @param {string} path - La ruta en el storage (ej: 'courses/courseId/materials')
 * @param {Function} onProgress - Callback para el progreso de subida (0-100)
 * @returns {Promise<Object>} - { success, url?, message? }
 */
export const uploadFile = async (file, path, onProgress = () => {}) => {
  return new Promise((resolve, reject) => {
    try {
      // Crear referencia única con timestamp y nombre original
      const fileName = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
      const storageRef = ref(storage, `${path}/${fileName}`);
      
      // Iniciar subida
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Monitorear progreso
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress(progress);
        },
        (error) => {
          // Manejar errores
          console.error('Error subiendo archivo:', error);
          resolve({ success: false, message: error.message });
        },
        async () => {
          // Subida completada
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            const metadata = await getMetadata(uploadTask.snapshot.ref);
            
            resolve({
              success: true,
              url: downloadURL,
              path: uploadTask.snapshot.ref.fullPath,
              name: file.name,
              size: metadata.size,
              contentType: metadata.contentType,
              uploadedAt: new Date().toISOString()
            });
          } catch (err) {
            resolve({ success: false, message: 'Error obteniendo URL de descarga: ' + err.message });
          }
        }
      );
    } catch (error) {
      console.error('Error inicializando subida:', error);
      resolve({ success: false, message: error.message });
    }
  });
};

/**
 * Obtiene la URL de descarga de un archivo existente
 * @param {string} filePath - Ruta completa del archivo en storage
 * @returns {Promise<Object>} - { success, url?, message? }
 */
export const getFileURL = async (filePath) => {
  try {
    const fileRef = ref(storage, filePath);
    const url = await getDownloadURL(fileRef);
    return { success: true, url };
  } catch (error) {
    console.error('Error obteniendo URL del archivo:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Elimina un archivo de Firebase Storage
 * @param {string} filePath - Ruta completa del archivo en storage
 * @returns {Promise<Object>} - { success, message? }
 */
export const deleteFile = async (filePath) => {
  try {
    const fileRef = ref(storage, filePath);
    await deleteObject(fileRef);
    return { success: true, message: 'Archivo eliminado exitosamente' };
  } catch (error) {
    console.error('Error eliminando archivo:', error);
    if (error.code === 'storage/object-not-found') {
      return { success: false, message: 'El archivo no existe' };
    }
    return { success: false, message: error.message };
  }
};

/**
 * Lista todos los archivos en una carpeta específica
 * @param {string} folderPath - Ruta de la carpeta en storage
 * @returns {Promise<Object>} - { success, files?, message? }
 * files es un array de { name, fullPath, url? }
 */
export const listFiles = async (folderPath) => {
  try {
    const folderRef = ref(storage, folderPath);
    const result = await listAll(folderRef);
    
    const files = await Promise.all(
      result.items.map(async (itemRef) => {
        try {
          const url = await getDownloadURL(itemRef);
          const metadata = await getMetadata(itemRef);
          return {
            name: itemRef.name,
            fullPath: itemRef.fullPath,
            url: url,
            size: metadata.size,
            uploadedAt: metadata.timeCreated
          };
        } catch (err) {
          return {
            name: itemRef.name,
            fullPath: itemRef.fullPath,
            url: null,
            error: err.message
          };
        }
      })
    );

    return { success: true, files };
  } catch (error) {
    console.error('Error listando archivos:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Descarga un archivo como Blob (útil para previsualizaciones o descargas directas)
 * @param {string} filePath - Ruta completa del archivo en storage
 * @returns {Promise<Object>} - { success, blob?, url?, message? }
 */
export const downloadFile = async (filePath) => {
  try {
    const fileRef = ref(storage, filePath);
    const url = await getDownloadURL(fileRef);
    
    const response = await fetch(url);
    const blob = await response.blob();
    
    return { 
      success: true, 
      blob,
      url 
    };
  } catch (error) {
    console.error('Error descargando archivo:', error);
    return { success: false, message: error.message };
  }
};