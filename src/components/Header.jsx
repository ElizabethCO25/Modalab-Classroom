import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './Header.css';

const Header = () => {
  const { currentUser, userProfile } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <header className="app-header">
      <div className="header-logo">
        <h1>🎓 ModaLAB Escuela</h1>
      </div>
      <div className="header-user">
        <span>{userProfile?.name || currentUser?.email}</span>
        <span className="user-role">{userProfile?.role}</span>
        <button onClick={handleLogout} className="btn-logout">Cerrar Sesión</button>
      </div>
    </header>
  );
};

export default Header;