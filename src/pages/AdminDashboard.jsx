import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext'
import { db, storage } from '../firebase'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'

function AdminDashboard() {
  // const { currentUser, logout, userRole } = useAuth()
  const navigate = useNavigate()
  
  // Estado para simular usuario y rol (para pruebas sin autenticación)
  const [currentUser, setCurrentUser] = useState({ email: 'admin@demo.com' })
  const [userRole, setUserRole] = useState('admin')
  
  // Selector de roles para pruebas
  const [roleSelector, setRoleSelector] = useState('admin')
  
  const [activeTab, setActiveTab] = useState('cursos')
  const [cursos, setCursos] = useState([])
  const [usuarios, setUsuarios] = useState([])
  const [tareas, setTareas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Estados para formularios
  const [nuevoCurso, setNuevoCurso] = useState({ nombre: '', descripcion: '' })
  const [nuevoUsuario, setNuevoUsuario] = useState({ email: '', password: '', role: 'student' })

  useEffect(() => {
    // Verificar que el usuario sea admin
    if (userRole !== 'admin') {
      navigate('/student')
      return
    }
    cargarDatos()
  }, [userRole, navigate])

  // Manejar cambio de rol desde el selector
  useEffect(() => {
    if (roleSelector === 'student') {
      navigate('/student')
    }
  }, [roleSelector, navigate])

  async function cargarDatos() {
    try {
      setLoading(true)
      // Cargar cursos
      const cursosSnapshot = await getDocs(collection(db, 'cursos'))
      setCursos(cursosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))

      // Cargar usuarios
      const usuariosSnapshot = await getDocs(collection(db, 'users'))
      setUsuarios(usuariosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))

      // Cargar tareas
      const tareasSnapshot = await getDocs(collection(db, 'tareas'))
      setTareas(tareasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    } catch (err) {
      setError('Error al cargar datos: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  async function crearCurso(e) {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'cursos'), {
        ...nuevoCurso,
        createdAt: new Date().toISOString(),
        activo: true
      })
      setSuccess('Curso creado exitosamente')
      setNuevoCurso({ nombre: '', descripcion: '' })
      cargarDatos()
    } catch (err) {
      setError('Error al crear curso: ' + err.message)
    }
  }

  async function eliminarCurso(id) {
    if (!confirm('¿Estás seguro de eliminar este curso?')) return
    try {
      await deleteDoc(doc(db, 'cursos', id))
      setSuccess('Curso eliminado exitosamente')
      cargarDatos()
    } catch (err) {
      setError('Error al eliminar curso: ' + err.message)
    }
  }

  async function crearUsuario(e) {
    e.preventDefault()
    try {
      // Nota: La creación real de usuarios con auth requiere backend o cloud functions
      // Aquí solo creamos el documento en Firestore
      await addDoc(collection(db, 'users'), {
        email: nuevoUsuario.email,
        role: nuevoUsuario.role,
        createdAt: new Date().toISOString(),
        activo: true
      })
      setSuccess('Usuario registrado exitosamente')
      setNuevoUsuario({ email: '', password: '', role: 'student' })
      cargarDatos()
    } catch (err) {
      setError('Error al crear usuario: ' + err.message)
    }
  }

  async function handleLogout() {
    // Para pruebas sin autenticación, solo redirigimos al dashboard de estudiante
    navigate('/student')
    // try {
    //   await logout()
    //   navigate('/login')
    // } catch (err) {
    //   setError('Error al cerrar sesión')
    // }
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando panel de administrador...</p>
      </div>
    )
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ModaLAB Escuela - Panel Admin</h1>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Selector de roles para pruebas */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label style={{ color: 'white', fontSize: '0.9rem' }}>Ver como:</label>
            <select 
              value={roleSelector} 
              onChange={(e) => setRoleSelector(e.target.value)}
              style={{ padding: '0.3rem', borderRadius: '4px', border: 'none' }}
            >
              <option value="admin">Administrador</option>
              <option value="student">Estudiante</option>
            </select>
          </div>
          
          <span style={{ color: 'white', marginRight: '1rem' }}>
            {currentUser?.email}
          </span>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </nav>
      </header>

      <main className="app-main">
        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        {/* Tabs de navegación */}
        <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
          <button
            className={`btn ${activeTab === 'cursos' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('cursos')}
          >
            Cursos
          </button>
          <button
            className={`btn ${activeTab === 'usuarios' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('usuarios')}
          >
            Usuarios
          </button>
          <button
            className={`btn ${activeTab === 'tareas' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('tareas')}
          >
            Tareas
          </button>
        </div>

        {/* Contenido de Cursos */}
        {activeTab === 'cursos' && (
          <div>
            <div className="card">
              <h3>Crear Nuevo Curso</h3>
              <form onSubmit={crearCurso}>
                <div className="form-group">
                  <label>Nombre del curso</label>
                  <input
                    type="text"
                    value={nuevoCurso.nombre}
                    onChange={(e) => setNuevoCurso({ ...nuevoCurso, nombre: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Descripción</label>
                  <textarea
                    value={nuevoCurso.descripcion}
                    onChange={(e) => setNuevoCurso({ ...nuevoCurso, descripcion: e.target.value })}
                    rows="3"
                  />
                </div>
                <button type="submit" className="btn btn-primary">Crear Curso</button>
              </form>
            </div>

            <div className="card">
              <h3>Cursos Existentes</h3>
              {cursos.length === 0 ? (
                <p>No hay cursos registrados</p>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Descripción</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cursos.map(curso => (
                      <tr key={curso.id}>
                        <td>{curso.nombre}</td>
                        <td>{curso.descripcion}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => eliminarCurso(curso.id)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* Contenido de Usuarios */}
        {activeTab === 'usuarios' && (
          <div>
            <div className="card">
              <h3>Registrar Nuevo Usuario</h3>
              <form onSubmit={crearUsuario}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={nuevoUsuario.email}
                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Contraseña temporal</label>
                  <input
                    type="password"
                    value={nuevoUsuario.password}
                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, password: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Rol</label>
                  <select
                    value={nuevoUsuario.role}
                    onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, role: e.target.value })}
                  >
                    <option value="student">Alumno</option>
                    <option value="admin">Administrador</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">Crear Usuario</button>
              </form>
            </div>

            <div className="card">
              <h3>Usuarios Registrados</h3>
              {usuarios.length === 0 ? (
                <p>No hay usuarios registrados</p>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Rol</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuarios.map(usuario => (
                      <tr key={usuario.id}>
                        <td>{usuario.email}</td>
                        <td>{usuario.role}</td>
                        <td>{usuario.activo ? 'Activo' : 'Inactivo'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* Contenido de Tareas */}
        {activeTab === 'tareas' && (
          <div className="card">
            <h3>Gestión de Tareas</h3>
            {tareas.length === 0 ? (
              <p>No hay tareas registradas</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Curso</th>
                    <th>Fecha límite</th>
                  </tr>
                </thead>
                <tbody>
                  {tareas.map(tarea => (
                    <tr key={tarea.id}>
                      <td>{tarea.titulo}</td>
                      <td>{tarea.cursoId || 'Sin asignar'}</td>
                      <td>{tarea.fechaLimite || 'Sin fecha'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default AdminDashboard
