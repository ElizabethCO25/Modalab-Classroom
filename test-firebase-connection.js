// Script de prueba para validar conexión con Firebase y Firestore
// Ejecutar con: node test-firebase-connection.js

import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import dotenv from 'dotenv'

// Cargar variables de entorno
dotenv.config()

console.log('🔍 Validando configuración de Firebase...\n')

// Verificar variables de entorno
const requiredVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID'
]

let allVarsPresent = true
requiredVars.forEach(varName => {
  const value = process.env[varName]
  if (value && value !== 'tu_api_key_aqui' && !value.includes('tu_')) {
    console.log(`✅ ${varName}: Configurado`)
  } else {
    console.log(`❌ ${varName}: NO configurado o tiene valor por defecto`)
    allVarsPresent = false
  }
})

if (!allVarsPresent) {
  console.log('\n⚠️  ERROR: Faltan variables de entorno por configurar.')
  console.log('📝 Copia .env.example a .env y configura tus credenciales de Firebase.')
  process.exit(1)
}

// Configuración de Firebase
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
}

console.log('\n🔥 Inicializando Firebase...')

try {
  // Inicializar app
  const app = initializeApp(firebaseConfig)
  console.log('✅ Firebase App inicializado correctamente')

  // Inicializar servicios
  const db = getFirestore(app)
  console.log('✅ Firestore inicializado correctamente')

  const auth = getAuth(app)
  console.log('✅ Auth inicializado correctamente')

  const storage = getStorage(app)
  console.log('✅ Storage inicializado correctamente')

  // Prueba de conexión a Firestore
  console.log('\n📡 Probando conexión con Firestore...')
  
  getDocs(collection(db, 'users'))
    .then((querySnapshot) => {
      console.log('✅ Conexión a Firestore exitosa!')
      console.log(`   Se pudieron leer documentos de la colección 'users'`)
      console.log(`   Cantidad de documentos: ${querySnapshot.size}`)
      
      console.log('\n✅ TODAS LAS VALIDACIONES PASARON CORRECTAMENTE')
      console.log('\n📋 Resumen:')
      console.log('   - Variables de entorno: ✅ Configuradas')
      console.log('   - Firebase App: ✅ Inicializado')
      console.log('   - Firestore: ✅ Conectado')
      console.log('   - Auth: ✅ Inicializado')
      console.log('   - Storage: ✅ Inicializado')
      console.log('\n✨ Tu aplicación está lista para usarse en gh-pages!')
    })
    .catch((error) => {
      console.error('❌ Error al conectar con Firestore:', error.message)
      console.error('\n💡 Posibles causas:')
      console.error('   1. Las reglas de seguridad de Firestore bloquean el acceso')
      console.error('   2. Las credenciales de Firebase son incorrectas')
      console.error('   3. El proyecto de Firebase no existe o está deshabilitado')
      process.exit(1)
    })

} catch (error) {
  console.error('❌ Error al inicializar Firebase:', error.message)
  console.error('\n💡 Verifica que las credenciales en tu archivo .env sean correctas')
  process.exit(1)
}
