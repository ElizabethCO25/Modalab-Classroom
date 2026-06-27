import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { userProfile } = useAuth();
  const location = useLocation();
  const isAdmin = userProfile?.role === 'admin';

  const adminLinks = [
    { path: '/admin/dashboard', label: 'Dashboard' },
    { path: '/admin/users', label: 'Usuarios' },
    { path: '/admin/courses', label: 'Cursos' },
    { path: '/admin/assignments', label: 'Tareas' },
  ];

  const studentLinks = [
    { path: '/student/courses', label: 'Mis Cursos' },
    { path: '/student/assignments', label: 'Mis Tareas' },
    { path: '/student/grades', label: 'Calificaciones' },
  ];

  const links = isAdmin ? adminLinks : studentLinks;

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`sidebar-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;