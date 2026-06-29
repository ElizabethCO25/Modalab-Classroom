// ... imports
function ProtectedRoute({ children, requiredRole }) {
  // Ahora sí recibirá 'userRole' gracias al cambio en AuthContext
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

  // Esta comparación ahora funcionará porque userRole tendrá el valor de Firestore
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
export default ProtectedRoute;