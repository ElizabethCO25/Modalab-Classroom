import React, { useState } from 'react';
import './Calendar.css';

/**
 * Componente de calendario visual mensual
 * @param {Array} events - Lista de eventos { id, title, date (ISO string), type, color? }
 * @param {Function} onEventClick - Callback cuando se hace clic en un evento
 */
const Calendar = ({ events = [], onEventClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Obtener días del mes actual
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const days = [];
    
    // Rellenar días vacíos antes del primer día del mes
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push({ day: null, date: null });
    }
    
    // Rellenar días del mes
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const currentDate = new Date(year, month, i);
      const dateStr = currentDate.toISOString().split('T')[0];
      
      // Filtrar eventos para este día
      const dayEvents = events.filter(e => {
        const eventDate = e.date instanceof Date ? e.date.toISOString().split('T')[0] : e.date.split('T')[0];
        return eventDate === dateStr;
      });

      days.push({
        day: i,
        date: currentDate,
        dateStr,
        isToday: isToday(currentDate),
        events: dayEvents
      });
    }
    
    return days;
  };

  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const days = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' });

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'assignment': return '#e74c3c'; // Rojo para tareas
      case 'exam': return '#f39c12'; // Naranja para exámenes
      case 'event': return '#3498db'; // Azul para eventos generales
      default: return '#2ecc71'; // Verde por defecto
    }
  };

  return (
    <div className="calendar-component">
      {/* Cabecera del calendario */}
      <div className="calendar-header">
        <button onClick={prevMonth} className="nav-btn" aria-label="Mes anterior">‹</button>
        <h2 className="month-title">{monthName}</h2>
        <button onClick={nextMonth} className="nav-btn" aria-label="Mes siguiente">›</button>
        <button onClick={goToToday} className="today-btn">Hoy</button>
      </div>

      {/* Días de la semana */}
      <div className="weekdays-grid">
        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
          <div key={day} className="weekday-label">{day}</div>
        ))}
      </div>

      {/* Grid de días */}
      <div className="days-grid">
        {days.map((item, index) => {
          if (!item.day) {
            return <div key={`empty-${index}`} className="day-cell empty"></div>;
          }

          return (
            <div 
              key={item.dateStr} 
              className={`day-cell ${item.isToday ? 'today' : ''}`}
            >
              <span className="day-number">{item.day}</span>
              
              {/* Indicadores de eventos */}
              <div className="events-indicator">
                {item.events.slice(0, 3).map(event => (
                  <div 
                    key={event.id}
                    className="event-dot"
                    style={{ backgroundColor: event.color || getEventTypeColor(event.type) }}
                    title={event.title}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onEventClick) onEventClick(event);
                    }}
                  />
                ))}
                {item.events.length > 3 && (
                  <span className="more-events">+{item.events.length - 3}</span>
                )}
              </div>

              {/* Lista completa de eventos al hacer hover (opcional, simplificado aquí) */}
              {item.events.length > 0 && (
                <div className="day-events-list">
                  {item.events.map(event => (
                    <div 
                      key={event.id}
                      className="mini-event"
                      onClick={() => onEventClick && onEventClick(event)}
                      style={{ borderLeftColor: event.color || getEventTypeColor(event.type) }}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Leyenda de tipos de eventos */}
      <div className="calendar-legend">
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#e74c3c' }}></span>
          <span>Tarea</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#f39c12' }}></span>
          <span>Examen</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#3498db' }}></span>
          <span>Evento</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;