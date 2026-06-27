import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import StudentDashboard from './pages/StudentDashboard'
import './styles/App.css'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  if (loading) {
    return <div className="loading">Cargando...</div>
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={!user ? <Login /> : <Navigate to="/" />} 
        />
        <Route 
          path="/admin" 
          element={user ? <AdminDashboard user={user} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/student" 
          element={user ? <StudentDashboard user={user} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/" 
          element={
            user ? (
              <Navigate to={user.email.includes('admin') ? '/admin' : '/student'} />
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
