import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function ProtectedRoute({ children, requiredRole }) {
  const { currentUser, userRole, loading } = useAuth()

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando...</p>
      </div>
    )
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  if (requiredRole && userRole !== requiredRole) {
    if (userRole === 'admin') {
      return <Navigate to="/admin" replace />
    } else if (userRole === 'student') {
      return <Navigate to="/student" replace />
    }
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
