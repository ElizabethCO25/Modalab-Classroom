import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getCourse } from '../services/courseService';
import { getAssignmentsByCourse } from '../services/assignmentService';
import { getEventsByCourse } from '../services/calendarService';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FileList from '../components/FileList';
import CourseCard from '../components/CourseCard';
import './CourseDetail.css';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { currentUser, userRole } = useAuth();
  
  const [course, setCourse] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); // overview, assignments, materials, calendar

  useEffect(() => {
    const fetchCourseData = async () => {
      if (!courseId || !currentUser) return;

      try {
        setLoading(true);
        
        // Obtener detalles del curso
        const courseResult = await getCourse(courseId);
        if (!courseResult.success) {
          throw new Error(courseResult.message);
        }
        setCourse(courseResult.data);

        // Verificar permisos (solo estudiantes inscritos o admins/profesores pueden ver)
        const isEnrolled = courseResult.data.students?.includes(currentUser.uid);
        const isTeacher = courseResult.data.teacherId === currentUser.uid;
        const isAdmin = userRole === 'admin';

        if (!isEnrolled && !isTeacher && !isAdmin) {
          setError('No tienes permiso para ver este curso.');
          return;
        }

        // Obtener tareas del curso
        const assignmentsResult = await getAssignmentsByCourse(courseId);
        if (assignmentsResult.success) {
          setAssignments(assignmentsResult.data);
        }

        // Obtener eventos del curso
        const eventsResult = await getEventsByCourse(courseId);
        if (eventsResult.success) {
          setEvents(eventsResult.data);
        }

      } catch (err) {
        console.error('Error cargando datos del curso:', err);
        setError(err.message || 'Error al cargar el curso');
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseId, currentUser, userRole]);

  if (loading) {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="dashboard-content">
          <Sidebar />
          <main className="main-content">
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Cargando información del curso...</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="dashboard-content">
          <Sidebar />
          <main className="main-content">
            <div className="error-message">
              <h3>Error</h3>
              <p>{error || 'Curso no encontrado'}</p>
              <button onClick={() => navigate(userRole === 'admin' ? '/admin/courses' : '/student/courses')} className="btn btn-primary">
                Volver a la lista
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'assignments':
        return (
          <div className="tab-content">
            <h2>Tareas y Actividades</h2>
            {assignments.length === 0 ? (
              <p className="empty-state">No hay tareas asignadas aún.</p>
            ) : (
              <div className="assignments-list">
                {assignments.map(task => (
                  <div key={task.id} className="assignment-item card">
                    <div className="assignment-header">
                      <h4>{task.title}</h4>
                      <span className={`badge ${task.dueDate < new Date().toISOString() ? 'badge-danger' : 'badge-info'}`}>
                        {task.dueDate < new Date().toISOString() ? 'Vencida' : 'Pendiente'}
                      </span>
                    </div>
                    <p>{task.description}</p>
                    <div className="assignment-meta">
                      <span>📅 Entrega: {new Date(task.dueDate).toLocaleDateString()}</span>
                      {task.maxGrade && <span>🏆 Puntos máximos: {task.maxGrade}</span>}
                    </div>
                    <button 
                      className="btn btn-sm btn-primary"
                      onClick={() => navigate(userRole === 'admin' ? `/admin/assignment/${task.id}` : `/student/assignment/${task.id}`)}
                    >
                      {userRole === 'admin' ? 'Gestionar' : 'Ver Detalles'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      
      case 'materials':
        return (
          <div className="tab-content">
            <h2>Materiales del Curso</h2>
            {course.materials && course.materials.length > 0 ? (
              <FileList files={course.materials} />
            ) : (
              <p className="empty-state">No hay materiales subidos aún.</p>
            )}
          </div>
        );

      case 'calendar':
        return (
          <div className="tab-content">
            <h2>Calendario del Curso</h2>
            {events.length === 0 ? (
              <p className="empty-state">No hay eventos próximos.</p>
            ) : (
              <ul className="events-list">
                {events.map(event => (
                  <li key={event.id} className="event-item">
                    <strong>{event.title}</strong>
                    <span className="event-date">{new Date(event.startDate).toLocaleDateString()}</span>
                    <p>{event.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );

      default: // Overview
        return (
          <div className="tab-content">
            <div className="course-overview">
              <h2>{course.title}</h2>
              <p className="course-description">{course.description}</p>
              
              <div className="course-info-grid">
                <div className="info-card">
                  <h4>Profesor</h4>
                  <p>{course.teacherName || 'No especificado'}</p>
                </div>
                <div className="info-card">
                  <h4>Estudiantes</h4>
                  <p>{course.students?.length || 0} inscritos</p>
                </div>
                <div className="info-card">
                  <h4>Tareas</h4>
                  <p>{assignments.length} activas</p>
                </div>
              </div>

              {course.imageUrl && (
                <div className="course-image">
                  <img src={course.imageUrl} alt={course.title} />
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        
        <main className="main-content course-detail-page">
          {/* Cabecera del curso */}
          <div className="course-detail-header">
            <button onClick={() => navigate(-1)} className="btn-back">← Volver</button>
            <h1>{course.title}</h1>
          </div>

          {/* Pestañas de navegación */}
          <div className="tabs-nav">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Resumen
            </button>
            <button 
              className={`tab-btn ${activeTab === 'assignments' ? 'active' : ''}`}
              onClick={() => setActiveTab('assignments')}
            >
              Tareas ({assignments.length})
            </button>
            <button 
              className={`tab-btn ${activeTab === 'materials' ? 'active' : ''}`}
              onClick={() => setActiveTab('materials')}
            >
              Materiales
            </button>
            <button 
              className={`tab-btn ${activeTab === 'calendar' ? 'active' : ''}`}
              onClick={() => setActiveTab('calendar')}
            >
              Calendario
            </button>
          </div>

          {/* Contenido dinámico */}
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default CourseDetail;