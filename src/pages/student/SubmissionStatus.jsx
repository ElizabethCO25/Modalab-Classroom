import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getUserSubmissionsWithDetails } from '../../services/submissionService';
import { getAllCourses } from '../../services/courseService';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import FileList from '../../components/FileList';
import './StudentDashboard.css';

const SubmissionStatus = () => {
  const { currentUser, userRole } = useAuth();
  const [submissions, setSubmissions] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filtros
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;

      try {
        setLoading(true);
        // Obtener entregas y cursos en paralelo
        const [subsResult, coursesResult] = await Promise.all([
          getUserSubmissionsWithDetails(currentUser.uid),
          getAllCourses()
        ]);

        if (subsResult.success) {
          setSubmissions(subsResult.data);
        } else {
          setError(subsResult.message);
        }

        if (coursesResult.success) {
          setCourses(coursesResult.data);
        }
      } catch (err) {
        console.error('Error cargando datos:', err);
        setError('No se pudieron cargar los datos de las entregas.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  // Filtrar entregas
  const filteredSubmissions = submissions.filter(sub => {
    const matchCourse = selectedCourse === 'all' || sub.courseId === selectedCourse;
    const matchStatus = selectedStatus === 'all' || sub.status === selectedStatus;
    return matchCourse && matchStatus;
  });

  // Helper para obtener nombre del curso
  const getCourseName = (courseId) => {
    const course = courses.find(c => c.id === courseId);
    return course ? course.title : 'Curso desconocido';
  };

  // Helper para estilos de estado
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'graded': return 'badge-success';
      case 'submitted': return 'badge-info';
      case 'late': return 'badge-warning';
      default: return 'badge-secondary';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'graded': return 'Calificada';
      case 'submitted': return 'Entregada';
      case 'late': return 'Tardía';
      case 'pending': return 'Pendiente';
      default: return status;
    }
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="dashboard-content">
          <Sidebar />
          <main className="main-content">
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Cargando tus entregas...</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="dashboard-content">
          <Sidebar />
          <main className="main-content">
            <div className="error-message">
              <h3>Error</h3>
              <p>{error}</p>
              <button onClick={() => window.location.reload()} className="btn btn-primary">Reintentar</button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        
        <main className="main-content">
          <div className="page-header">
            <h1>Mis Entregas</h1>
            <p>Revisa el estado y calificaciones de todas tus tareas.</p>
          </div>

          {/* Filtros */}
          <div className="filters-bar">
            <div className="filter-group">
              <label htmlFor="course-filter">Filtrar por curso:</label>
              <select 
                id="course-filter" 
                value={selectedCourse} 
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="form-control"
              >
                <option value="all">Todos los cursos</option>
                {courses.map(course => (
                  <option key={course.id} value={course.id}>{course.title}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="status-filter">Filtrar por estado:</label>
              <select 
                id="status-filter" 
                value={selectedStatus} 
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="form-control"
              >
                <option value="all">Todos los estados</option>
                <option value="pending">Pendiente</option>
                <option value="submitted">Entregada</option>
                <option value="late">Tardía</option>
                <option value="graded">Calificada</option>
              </select>
            </div>
          </div>

          {/* Tabla de resultados */}
          <div className="card">
            <div className="card-header">
              <h3>Lista de Entregas ({filteredSubmissions.length})</h3>
            </div>
            <div className="card-body table-responsive">
              {filteredSubmissions.length === 0 ? (
                <div className="empty-state">
                  <p>No se encontraron entregas con los filtros seleccionados.</p>
                </div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Tarea</th>
                      <th>Curso</th>
                      <th>Fecha Límite</th>
                      <th>Fecha Entrega</th>
                      <th>Estado</th>
                      <th>Calificación</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubmissions.map((sub) => (
                      <tr key={sub.id}>
                        <td>
                          <strong>{sub.assignmentTitle}</strong>
                        </td>
                        <td>{getCourseName(sub.courseId)}</td>
                        <td>
                          {sub.dueDate 
                            ? new Date(sub.dueDate).toLocaleDateString() 
                            : 'Sin fecha'}
                        </td>
                        <td>
                          {sub.submittedAt 
                            ? new Date(sub.submittedAt).toLocaleString() 
                            : '-'}
                        </td>
                        <td>
                          <span className={`badge ${getStatusBadgeClass(sub.status)}`}>
                            {getStatusLabel(sub.status)}
                          </span>
                        </td>
                        <td>
                          {sub.grade !== null && sub.grade !== undefined ? (
                            <span className="grade-badge">{sub.grade}/100</span>
                          ) : (
                            <span className="text-muted">-</span>
                          )}
                        </td>
                        <td>
                          <div className="action-buttons">
                            {sub.files && sub.files.length > 0 && (
                              <a 
                                href="#" 
                                className="btn-icon" 
                                title="Ver archivos"
                                onClick={(e) => {
                                  e.preventDefault();
                                  alert('Funcionalidad para ver archivos adjuntos en desarrollo.');
                                }}
                              >
                                📎
                              </a>
                            )}
                            {sub.feedback && (
                              <button 
                                className="btn-icon" 
                                title="Ver feedback"
                                onClick={() => alert(`Feedback del profesor:\n\n${sub.feedback}`)}
                              >
                                💬
                              </button>
                            )}
                            {sub.status === 'pending' && (
                              <a 
                                href={`/student/assignment/${sub.assignmentId}`} 
                                className="btn-sm btn-primary"
                              >
                                Entregar
                              </a>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SubmissionStatus;