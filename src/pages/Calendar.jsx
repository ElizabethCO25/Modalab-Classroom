import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getAllEvents, getEventsByCourse, getCoursesByStudent } from '../services/calendarService';
import { getAllCourses } from '../services/courseService';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Calendar from '../components/Calendar';
import './CalendarPage.css';

const CalendarPage = () => {
  const { currentUser, userRole } = useAuth();
  const [events, setEvents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filtros
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;

      try {
        setLoading(true);
        let allEvents = [];
        let allCourses = [];

        // 1. Obtener cursos disponibles para el usuario
        if (userRole === 'student') {
          const coursesResult = await getCoursesByStudent(currentUser.uid);
          if (coursesResult.success) allCourses = coursesResult.data;
        } else {
          // Admin/Teacher ve todos los cursos o los que crea
          const coursesResult = await getAllCourses();
          if (coursesResult.success) allCourses = coursesResult.data;
        }
        setCourses(allCourses);

        // 2. Obtener eventos
        // Si hay un curso seleccionado, filtramos por ese curso
        if (selectedCourse !== 'all') {
          const eventsResult = await getEventsByCourse(selectedCourse);
          if (eventsResult.success) allEvents = eventsResult.data;
        } else {
          // Si no, obtenemos todos los eventos relevantes
          // Nota: En una app real, 'getAllEvents' debería filtrar por permisos
          const eventsResult = await getAllEvents(); 
          if (eventsResult.success) {
            // Filtrado manual básico si el servicio no lo hace
            allEvents = eventsResult.data.filter(evt => {
              if (!evt.courseId) return true; // Eventos globales
              return allCourses.some(c => c.id === evt.courseId);
            });
          }
        }

        setEvents(allEvents);
      } catch (err) {
        console.error('Error cargando calendario:', err);
        setError('No se pudieron cargar los eventos del calendario.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser, selectedCourse, userRole]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const getEventTypeLabel = (type) => {
    switch (type) {
      case 'assignment': return 'Tarea';
      case 'exam': return 'Examen';
      case 'event': return 'Evento General';
      default: return type;
    }
  };

  const getColorForType = (type) => {
    switch (type) {
      case 'assignment': return '#e74c3c';
      case 'exam': return '#f39c12';
      case 'event': return '#3498db';
      default: return '#2ecc71';
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
              <p>Cargando calendario...</p>
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
        
        <main className="main-content calendar-page-main">
          <div className="page-header">
            <h1>Calendario Académico</h1>
            <p>Visualiza tus tareas, exámenes y eventos importantes.</p>
          </div>

          {/* Barra de filtros */}
          <div className="filters-bar">
            <div className="filter-group">
              <label>Filtrar por curso:</label>
              <select 
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
              <label>Tipo de evento:</label>
              <select 
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
                className="form-control"
              >
                <option value="all">Todos</option>
                <option value="assignment">Tareas</option>
                <option value="exam">Exámenes</option>
                <option value="event">Eventos</option>
              </select>
            </div>
          </div>

          {/* Componente Calendario */}
          <div className="calendar-wrapper">
            <Calendar 
              events={events.filter(e => selectedType === 'all' || e.type === selectedType)} 
              onEventClick={handleEventClick} 
            />
          </div>

          {/* Modal de Detalle de Evento */}
          {selectedEvent && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content event-detail-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                  <h3>{selectedEvent.title}</h3>
                  <button className="close-btn" onClick={closeModal}>×</button>
                </div>
                <div className="modal-body">
                  <div className="event-meta">
                    <span className="badge" style={{ backgroundColor: getColorForType(selectedEvent.type) }}>
                      {getEventTypeLabel(selectedEvent.type)}
                    </span>
                    <span className="event-date">
                      📅 {new Date(selectedEvent.startDate).toLocaleDateString()} 
                      {selectedEvent.endDate && ` - ${new Date(selectedEvent.endDate).toLocaleDateString()}`}
                    </span>
                  </div>
                  
                  {selectedEvent.description && (
                    <div className="event-description">
                      <h4>Descripción:</h4>
                      <p>{selectedEvent.description}</p>
                    </div>
                  )}

                  {selectedEvent.location && (
                    <div className="event-location">
                      <strong>📍 Ubicación:</strong> {selectedEvent.location}
                    </div>
                  )}
                  
                  {selectedEvent.courseId && (
                    <div className="event-course">
                      <strong>Curso:</strong> {courses.find(c => c.id === selectedEvent.courseId)?.title || 'Desconocido'}
                    </div>
                  )}
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
                  {/* Aquí podrías agregar botones para editar si es admin/profesor */}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CalendarPage;