import { createContext, useContext, useState, useEffect } from 'react'
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut,
  createUserWithEmailAndPassword 
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

// Crear contexto de autenticación
const AuthContext = createContext()

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider')
  }
  return context
}

// Proveedor del contexto
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [userRole, setUserRole] = useState(null)
  const [loading, setLoading] = useState(true)

  // Función para iniciar sesión
  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      
      // Obtener el rol del usuario desde Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid))
      if (userDoc.exists()) {
        setUserRole(userDoc.data().role)
      } else {
        setUserRole('student') // Rol por defecto
      }
      
      return user
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      throw error
    }
  }

  // Función para registrar usuario
  async function signup(email, password, role = 'student') {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      
      // Crear documento del usuario en Firestore
      // Nota: Esto debería hacerse en el backend o con reglas de seguridad apropiadas
      // Aquí es solo un ejemplo básico
      
      return user
    } catch (error) {
      console.error('Error al registrar usuario:', error)
      throw error
    }
  }

  // Función para cerrar sesión
  async function logout() {
    try {
      await signOut(auth)
      setUserRole(null)
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
      throw error
    }
  }

  // Escuchar cambios en el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user)
      
      if (user) {
        // Obtener el rol del usuario desde Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid))
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role)
          } else {
            setUserRole('student')
          }
        } catch (error) {
          console.error('Error al obtener rol del usuario:', error)
          setUserRole('student')
        }
      } else {
        setUserRole(null)
      }
      
      setLoading(false)
    })

    return unsubscribe
  }, [])

  // Valor del contexto
  const value = {
    currentUser,
    userRole,
    login,
    signup,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
