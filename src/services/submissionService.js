import { db } from '../firebase';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, query, where, orderBy, serverTimestamp } from 'firebase/firestore';

const submissionsCollection = collection(db, 'submissions');

/**
 * Crea una nueva entrega de tarea
 * @param {Object} submissionData - Datos de la entrega 
 * {assignmentId, studentId, studentName, courseId, files, submittedAt, status}
 */
export const createSubmission = async (submissionData) => {
  try {
    const newSubmissionRef = doc(submissionsCollection);
    await setDoc(newSubmissionRef, {
      ...submissionData,
      status: submissionData.status || 'pending', // pending, submitted, graded, late
      grade: null,
      feedback: '',
      gradedAt: null,
      gradedBy: null,
      submittedAt: submissionData.submittedAt || serverTimestamp(),
      createdAt: serverTimestamp()
    });
    return { 
      success: true, 
      submissionId: newSubmissionRef.id, 
      message: 'Entrega registrada exitosamente' 
    };
  } catch (error) {
    console.error('Error creando entrega:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene los datos de una entrega por su ID
 * @param {string} submissionId - ID de la entrega
 */
export const getSubmission = async (submissionId) => {
  try {
    const docRef = doc(submissionsCollection, submissionId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, data: { id: docSnap.id, ...docSnap.data() } };
    } else {
      return { success: false, message: 'Entrega no encontrada' };
    }
  } catch (error) {
    console.error('Error obteniendo entrega:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Actualiza los archivos de una entrega (re-entrega)
 * @param {string} submissionId - ID de la entrega
 * @param {Array} files - Nuevos archivos
 */
export const updateSubmissionFiles = async (submissionId, files) => {
  try {
    const docRef = doc(submissionsCollection, submissionId);
    await updateDoc(docRef, {
      files,
      submittedAt: serverTimestamp(),
      status: 'submitted',
      updatedAt: serverTimestamp()
    });
    return { success: true, message: 'Archivos actualizados exitosamente' };
  } catch (error) {
    console.error('Error actualizando archivos de entrega:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene todas las entregas de una tarea específica
 * @param {string} assignmentId - ID de la tarea
 */
export const getSubmissionsByAssignment = async (assignmentId) => {
  try {
    const q = query(
      submissionsCollection, 
      where('assignmentId', '==', assignmentId),
      orderBy('submittedAt', 'asc')
    );
    const querySnapshot = await getDocs(q);
    const submissions = [];
    querySnapshot.forEach((doc) => {
      submissions.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: submissions };
  } catch (error) {
    console.error('Error obteniendo entregas por tarea:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene todas las entregas de un estudiante
 * @param {string} studentId - ID del estudiante
 */
export const getSubmissionsByStudent = async (studentId) => {
  try {
    const q = query(
      submissionsCollection, 
      where('studentId', '==', studentId),
      orderBy('submittedAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const submissions = [];
    querySnapshot.forEach((doc) => {
      submissions.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: submissions };
  } catch (error) {
    console.error('Error obteniendo entregas por estudiante:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Califica una entrega
 * @param {string} submissionId - ID de la entrega
 * @param {number} grade - Calificación (0-10 o 0-100)
 * @param {string} feedback - Comentarios del profesor
 * @param {string} gradedBy - ID o nombre del profesor que califica
 */
export const gradeSubmission = async (submissionId, grade, feedback, gradedBy) => {
  try {
    const docRef = doc(submissionsCollection, submissionId);
    await updateDoc(docRef, {
      grade,
      feedback,
      gradedBy,
      gradedAt: serverTimestamp(),
      status: 'graded',
      updatedAt: serverTimestamp()
    });
    return { success: true, message: 'Entrega calificada exitosamente' };
  } catch (error) {
    console.error('Error calificando entrega:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Marca una entrega como tardía
 * @param {string} submissionId - ID de la entrega
 */
export const markAsLate = async (submissionId) => {
  try {
    const docRef = doc(submissionsCollection, submissionId);
    await updateDoc(docRef, {
      status: 'late',
      updatedAt: serverTimestamp()
    });
    return { success: true, message: 'Entrega marcada como tardía' };
  } catch (error) {
    console.error('Error marcando entrega como tardía:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene estadísticas de entregas para una tarea
 * @param {string} assignmentId - ID de la tarea
 * @returns {Object} - { total, pending, submitted, graded, late, averageGrade }
 */
export const getSubmissionStats = async (assignmentId) => {
  try {
    const submissionsResult = await getSubmissionsByAssignment(assignmentId);
    
    if (!submissionsResult.success) {
      return { success: false, message: submissionsResult.message };
    }

    const submissions = submissionsResult.data;
    const stats = {
      total: submissions.length,
      pending: 0,
      submitted: 0,
      graded: 0,
      late: 0,
      totalGrade: 0,
      gradedCount: 0
    };

    submissions.forEach(sub => {
      switch (sub.status) {
        case 'pending': stats.pending++; break;
        case 'submitted': stats.submitted++; break;
        case 'graded': 
          stats.graded++; 
          if (sub.grade !== null && sub.grade !== undefined) {
            stats.totalGrade += sub.grade;
            stats.gradedCount++;
          }
          break;
        case 'late': stats.late++; break;
        default: break;
      }
    });

    stats.averageGrade = stats.gradedCount > 0 
      ? (stats.totalGrade / stats.gradedCount).toFixed(2) 
      : 0;

    return { success: true, data: stats };
  } catch (error) {
    console.error('Error obteniendo estadísticas:', error);
    return { success: false, message: error.message };
  }
};