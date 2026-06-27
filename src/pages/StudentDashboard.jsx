import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { db, storage } from '../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { ref, downloadURL } from 'firebase/storage'

function StudentDashboard() {
  const { currentUser, logout, userRole } = useAuth()
  const navigate = useNavigate()
  const [cursos, setCursos] = useState([])
  const [tareas, setTareas] = useState([])
  const [materiales, setMateriales] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Estado para subir entrega
  const [archivoEntrega, setArchivoEntrega] = useState(null)
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null)

  useEffect(() => {
    // Verificar que el usuario sea estudiante
    if (userRole !== 'student') {
      navigate('/admin')
      return
    }
    cargarDatos()
  }, [userRole, navigate])

  async function cargarDatos() {
    try {
      setLoading(true)
      
      // Cargar cursos asignados al estudiante
      // En una implementación real, esto filtraría por el ID del estudiante
      const cursosSnapshot = await getDocs(collection(db, 'cursos'))
      setCursos(cursosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))

      // Cargar tareas
      const tareasSnapshot = await getDocs(collection(db, 'tareas'))
      setTareas(tareasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))

      // Cargar materiales
      const materialesSnapshot = await getDocs(collection(db, 'materiales'))
      setMateriales(materialesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    } catch (err) {
      setError('Error al cargar datos: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleLogout() {
    try {
      await logout()
      navigate('/login')
    } catch (err) {
      setError('Error al cerrar sesión')
    }
  }

  async function descargarMaterial(material) {
    try {
      // En una implementación real, esto obtendría la URL de descarga de Firebase Storage
      window.open(material.url, '_blank')
      setSuccess(`Descargando ${material.nombre}...`)
    } catch (err) {
      setError('Error al descargar material: ' + err.message)
    }
  }

  async function subirEntrega(e) {
    e.preventDefault()
    if (!archivoEntrega || !tareaSeleccionada) {
      setError('Selecciona una tarea y un archivo')
      return
    }

    try {
      // En una implementación real, esto subiría el archivo a Firebase Storage
      // y crearía un documento en la colección 'entregas'
      setSuccess('Entrega subida exitosamente')
      setArchivoEntrega(null)
      setTareaSeleccionada(null)
    } catch (err) {
      setError('Error al subir entrega: ' + err.message)
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando panel de estudiante...</p>
      </div>
    )
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ModaLAB Escuela - Panel Alumno</h1>
        <nav>
          <span style={{ color: 'white', marginRight: '1rem' }}>
            {currentUser?.email}
          </span>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </nav>
      </header>

      <main className="app-main">
        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        {/* Mis Cursos */}
        <section className="card" style={{ marginBottom: '2rem' }}>
          <h3>Mis Cursos</h3>
          {cursos.length === 0 ? (
            <p>No tienes cursos asignados</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
              {cursos.map(curso => (
                <div key={curso.id} className="card" style={{ background: '#f9f9f9' }}>
                  <h4>{curso.nombre}</h4>
                  <p>{curso.descripcion}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Tareas Pendientes */}
        <section className="card" style={{ marginBottom: '2rem' }}>
          <h3>Tareas</h3>
          {tareas.length === 0 ? (
            <p>No hay tareas pendientes</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Descripción</th>
                  <th>Fecha límite</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {tareas.map(tarea => (
                  <tr key={tarea.id}>
                    <td>{tarea.titulo}</td>
                    <td>{tarea.descripcion}</td>
                    <td>{tarea.fechaLimite || 'Sin fecha'}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => setTareaSeleccionada(tarea)}
                      >
                        Entregar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

        {/* Formulario de entrega */}
        {tareaSeleccionada && (
          <section className="card" style={{ marginBottom: '2rem' }}>
            <h3>Entregar: {tareaSeleccionada.titulo}</h3>
            <form onSubmit={subirEntrega}>
              <div className="form-group">
                <label>Seleccionar archivo</label>
                <input
                  type="file"
                  onChange={(e) => setArchivoEntrega(e.target.files[0])}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="submit" className="btn btn-primary">
                  Subir entrega
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setTareaSeleccionada(null)
                    setArchivoEntrega(null)
                  }}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Materiales de Clase */}
        <section className="card">
          <h3>Materiales de Clase</h3>
          {materiales.length === 0 ? (
            <p>No hay materiales disponibles</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Curso</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {materiales.map(material => (
                  <tr key={material.id}>
                    <td>{material.nombre}</td>
                    <td>{material.tipo || 'Archivo'}</td>
                    <td>{material.cursoId || 'General'}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => descargarMaterial(material)}
                      >
                        Descargar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  )
}

export default StudentDashboard
