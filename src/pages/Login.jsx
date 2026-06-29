import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    if (!email || !password) {
      setError('Por favor completa todos los campos')
      return
    }

    try {
      setError('')
      setLoading(true)
      // Al hacer login exitoso, onAuthStateChanged se activará
      // y ProtectedRoute se encargará de la redirección correcta
      await login(email, password)
      
      // NOTA: Se eliminó navigate('/') para evitar conflictos con HashRouter
      // La redirección ocurre automáticamente gracias al contexto y ProtectedRoute
    } catch (err) {
      setError('Error al iniciar sesión. Verifica tus credenciales.')
      console.error('Login error:', err)
    } finally {
      setLoading(false)
    }
  }
  

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>ModaLAB Escuela</h1>
          <p>Aula Virtual</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="alert alert-error">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              disabled={loading}
              required
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              disabled={loading}
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
        </form>

        <div className="login-footer">
          <p>¿Problemas para acceder? Contacta al administrador</p>
        </div>
      </div>
    </div>
  )
}

export default Login