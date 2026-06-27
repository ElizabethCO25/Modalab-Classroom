import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
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
        <h1>ModaLAB Escuela - Panel de Administrador</h1>
        <div className="user-info">
          <span>{currentUser?.email}</span>
          <button onClick={handleLogout} className="btn-secondary">
            Cerrar Sesión
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="admin-sections">
          <div className="section-card">
            <h2>Gestión de Usuarios</h2>
            <p>Crear, editar y eliminar usuarios del sistema</p>
            <button className="btn-primary">Gestionar Usuarios</button>
          </div>

          <div className="section-card">
            <h2>Gestión de Cursos</h2>
            <p>Crear, editar y eliminar cursos</p>
            <button className="btn-primary">Gestionar Cursos</button>
          </div>

          <div className="section-card">
            <h2>Asignar Tareas</h2>
            <p>Crear y asignar tareas a alumnos</p>
            <button className="btn-primary">Asignar Tareas</button>
          </div>

          <div className="section-card">
            <h2>Subir Contenido</h2>
            <p>Subir materiales (PDF, imágenes, videos)</p>
            <button className="btn-primary">Subir Material</button>
          </div>

          <div className="section-card">
            <h2>Configuración</h2>
            <p>Actualizar logo y preferencias de la escuela</p>
            <button className="btn-primary">Configurar</button>
          </div>
        </section>
      </main>
    </div>
  );
}
