// Importar funciones necesarias de Firebase
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Configuración de Firebase usando variables de entorno
const firebaseConfig = {
  apiKey: "AIzaSyBhyT_RCqsPrIbeobE1-0XbOLRsKnkWafs",
  authDomain: "modalab-classroom.firebaseapp.com",
  projectId: "modalab-classroom",
  storageBucket: "modalab-classroom.firebasestorage.app",
  messagingSenderId: "544221051450",
  appId: "1:544221051450:web:7d5a0e930370fdd33b5303"
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// Exportar servicios de Firebase
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
