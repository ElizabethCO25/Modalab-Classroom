import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ProtectedRoute({ children, requiredRole }) {
  const { currentUser, userRole, loading } = useAuth()

  // Mostrar estado de carga mientras se verifica la autenticación
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando...</p>
      </div>
    )
  }

  // Redirigir al login si no hay usuario autenticado
  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  // Verificar el rol requerido
  if (requiredRole && userRole !== requiredRole) {
    // Redirigir según el rol del usuario
    if (userRole === 'admin') {
      return <Navigate to="/admin" replace />
    } else if (userRole === 'student') {
      return <Navigate to="/student" replace />
    }
    return <Navigate to="/login" replace />
  }

  // Renderizar el componente protegido
  return children
}

export default ProtectedRoute
