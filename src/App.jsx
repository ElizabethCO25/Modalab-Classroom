import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import { AuthProvider } from './contexts/AuthContext'
// import ProtectedRoute from './components/ProtectedRoute'
// import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import StudentDashboard from './pages/StudentDashboard'
import './App.css'

// ============================================
// CONFIGURACIÓN DE AUTENTICACIÓN GUARDADA
// Para reactivar la autenticación en el futuro:
// 
// 1. Descomentar las imports de arriba
// 2. Envolver el Router con <AuthProvider>
// 3. Restaurar las rutas protegidas y login
// 4. Cambiar la ruta inicial de "/" a "/login"
//
// Rutas originales protegidas:
// - /login -> <Login />
// - /admin -> <ProtectedRoute requiredRole="admin"><AdminDashboard /></ProtectedRoute>
// - /student -> <ProtectedRoute requiredRole="student"><StudentDashboard /></ProtectedRoute>
// - "/" -> <Navigate to="/login" replace />
// - "*" -> <Navigate to="/login" replace />
// ============================================

function App() {
  return (
    // <AuthProvider>
      <Router>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          
          {/* Rutas sin protección para pruebas */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          
          {/* Ruta por defecto redirige al dashboard de estudiante para pruebas */}
          <Route path="/" element={<Navigate to="/student" replace />} />
          <Route path="*" element={<Navigate to="/student" replace />} />
        </Routes>
      </Router>
    // </AuthProvider>
  )
}

export default App
