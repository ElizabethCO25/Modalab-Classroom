import { createContext, useContext, useEffect, useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase'; // Asegúrate que esta ruta sea correcta

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    console.log('🔐 Intentando login con:', email);
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function register(email, password, name, role = 'student') {
    console.log('📝 Registrando nuevo usuario:', email);
    try {
      // Crear usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Crear documento en Firestore con los datos del usuario
      await setDoc(doc(db, 'users', user.uid), {
        email: email,
        name: name,
        role: role,
        createdAt: new Date().toISOString()
      });
      
      console.log('✅ Usuario registrado y documento creado en Firestore');
      return user;
    } catch (error) {
      console.error('❌ Error al registrar usuario:', error);
      throw error;
    }
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    console.log('🔄 Configurando listener de autenticación...');
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('👤 onAuthStateChanged ejecutado. Usuario:', user ? user.email : 'null');
      
      if (user) {
        console.log('✅ Usuario autenticado - UID:', user.uid);
        setCurrentUser(user);
        
        try {
          console.log('🔍 Buscando documento en Firestore para UID:', user.uid);
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          
          if (userDoc.exists()) {
            const data = userDoc.data();
            console.log('✅ Documento encontrado en Firestore:', data);
            setUserData(data);
          } else {
            console.warn('⚠️ No se encontró documento en Firestore, usando valores por defecto');
            // Fallback si no existe el documento en Firestore
            setUserData({ role: 'student', email: user.email, name: 'Usuario' });
          }
        } catch (error) {
          console.error('❌ Error al obtener documento de Firestore:', error);
          setUserData({ role: 'student', email: user.email, name: 'Usuario' });
        }
      } else {
        console.log('⚠️ No hay usuario autenticado');
        setCurrentUser(null);
        setUserData(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

const value = {
    currentUser,
    userData,
    userRole: userData?.role,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}