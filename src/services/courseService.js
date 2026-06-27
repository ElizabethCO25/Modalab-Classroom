import { db } from '../firebase';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';

const coursesCollection = collection(db, 'courses');

/**
 * Crea un nuevo curso
 * @param {Object} courseData - Datos del curso {title, description, teacherId, teacherName, students, materials, createdAt}
 */
export const createCourse = async (courseData) => {
  try {
    const newCourseRef = doc(coursesCollection);
    await setDoc(newCourseRef, {
      ...courseData,
      students: courseData.students || [],
      materials: courseData.materials || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return { success: true, courseId: newCourseRef.id, message: 'Curso creado exitosamente' };
  } catch (error) {
    console.error('Error creando curso:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene los datos de un curso por su ID
 * @param {string} courseId - ID del curso
 */
export const getCourse = async (courseId) => {
  try {
    const docRef = doc(coursesCollection, courseId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, data: docSnap.data() };
    } else {
      return { success: false, message: 'Curso no encontrado' };
    }
  } catch (error) {
    console.error('Error obteniendo curso:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Actualiza los datos de un curso
 * @param {string} courseId - ID del curso
 * @param {Object} updatedData - Datos a actualizar
 */
export const updateCourse = async (courseId, updatedData) => {
  try {
    const docRef = doc(coursesCollection, courseId);
    await updateDoc(docRef, {
      ...updatedData,
      updatedAt: new Date().toISOString()
    });
    return { success: true, message: 'Curso actualizado exitosamente' };
  } catch (error) {
    console.error('Error actualizando curso:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Elimina un curso
 * @param {string} courseId - ID del curso
 */
export const deleteCourse = async (courseId) => {
  try {
    await deleteDoc(doc(coursesCollection, courseId));
    return { success: true, message: 'Curso eliminado exitosamente' };
  } catch (error) {
    console.error('Error eliminando curso:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene todos los cursos
 */
export const getAllCourses = async () => {
  try {
    const querySnapshot = await getDocs(coursesCollection);
    const courses = [];
    querySnapshot.forEach((doc) => {
      courses.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: courses };
  } catch (error) {
    console.error('Error obteniendo cursos:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene cursos por profesor
 * @param {string} teacherId - ID del profesor
 */
export const getCoursesByTeacher = async (teacherId) => {
  try {
    const q = query(coursesCollection, where('teacherId', '==', teacherId));
    const querySnapshot = await getDocs(q);
    const courses = [];
    querySnapshot.forEach((doc) => {
      courses.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: courses };
  } catch (error) {
    console.error('Error obteniendo cursos por profesor:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Obtiene cursos donde un estudiante está inscrito
 * @param {string} studentId - ID del estudiante
 */
export const getCoursesByStudent = async (studentId) => {
  try {
    const q = query(coursesCollection, where('students', 'array-contains', studentId));
    const querySnapshot = await getDocs(q);
    const courses = [];
    querySnapshot.forEach((doc) => {
      courses.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, data: courses };
  } catch (error) {
    console.error('Error obteniendo cursos por estudiante:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Inscribe un estudiante en un curso
 * @param {string} courseId - ID del curso
 * @param {string} studentId - ID del estudiante
 */
export const enrollStudent = async (courseId, studentId) => {
  try {
    const docRef = doc(coursesCollection, courseId);
    const courseSnap = await getDoc(docRef);
    
    if (courseSnap.exists()) {
      const courseData = courseSnap.data();
      const students = courseData.students || [];
      
      if (!students.includes(studentId)) {
        students.push(studentId);
        await updateDoc(docRef, { 
          students,
          updatedAt: new Date().toISOString()
        });
        return { success: true, message: 'Estudiante inscrito exitosamente' };
      } else {
        return { success: false, message: 'El estudiante ya está inscrito en este curso' };
      }
    } else {
      return { success: false, message: 'Curso no encontrado' };
    }
  } catch (error) {
    console.error('Error inscribiendo estudiante:', error);
    return { success: false, message: error.message };
  }
};

/**
 * Desinscribe un estudiante de un curso
 * @param {string} courseId - ID del curso
 * @param {string} studentId - ID del estudiante
 */
export const unenrollStudent = async (courseId, studentId) => {
  try {
    const docRef = doc(coursesCollection, courseId);
    const courseSnap = await getDoc(docRef);
    
    if (courseSnap.exists()) {
      const courseData = courseSnap.data();
      const students = courseData.students || [];
      const updatedStudents = students.filter(id => id !== studentId);
      
      await updateDoc(docRef, { 
        students: updatedStudents,
        updatedAt: new Date().toISOString()
      });
      return { success: true, message: 'Estudiante desinscrito exitosamente' };
    } else {
      return { success: false, message: 'Curso no encontrado' };
    }
  } catch (error) {
    console.error('Error desinscribiendo estudiante:', error);
    return { success: false, message: error.message };
  }
};