import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function StudentDashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
    }
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>ModaLAB Escuela - Panel de Alumno</h1>
        <div className="user-info">
          <span>{currentUser?.email}</span>
          <button onClick={handleLogout} className="btn-secondary">
            Cerrar Sesión
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="student-sections">
          <div className="section-card">
            <h2>Mis Cursos</h2>
            <p>Ver cursos asignados y su progreso</p>
            <button className="btn-primary">Ver Cursos</button>
          </div>

          <div className="section-card">
            <h2>Tareas Pendientes</h2>
            <p>Revisar tareas asignadas y fechas de entrega</p>
            <button className="btn-primary">Ver Tareas</button>
          </div>

          <div className="section-card">
            <h2>Materiales</h2>
            <p>Descargar materiales de estudio (PDF, videos, imágenes)</p>
            <button className="btn-primary">Descargar Materiales</button>
          </div>

          <div className="section-card">
            <h2>Entregar Tareas</h2>
            <p>Subir entregas de tareas completadas</p>
            <button className="btn-primary">Subir Entrega</button>
          </div>
        </section>
      </main>
    </div>
  );
}
