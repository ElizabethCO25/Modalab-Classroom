import React from 'react';
import './ProfileCard.css';

/**
 * Tarjeta de perfil de usuario para mostrar información resumida
 * @param {Object} user - Datos del usuario { displayName, email, role, profilePicture, bio, location? }
 * @param {Function} onEdit - Callback opcional para editar el perfil (solo si es el propio usuario)
 */
const ProfileCard = ({ user, onEdit }) => {
  if (!user) {
    return <div className="profile-card loading">Cargando perfil...</div>;
  }

  const getRoleLabel = (role) => {
    switch (role) {
      case 'admin': return 'Administrador';
      case 'teacher': return 'Profesor';
      case 'student': return 'Estudiante';
      default: return role;
    }
  };

  const getRoleClass = (role) => {
    return `badge-role badge-${role}`;
  };

  // Imagen por defecto si no hay foto
  const avatarUrl = user.profilePicture || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || 'User')}&background=random&size=128`;

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-avatar-wrapper">
          <img 
            src={avatarUrl} 
            alt={user.displayName} 
            className="profile-avatar"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || 'User')}&background=random&size=128`;
            }}
          />
          {onEdit && (
            <button className="edit-avatar-btn" onClick={onEdit} title="Cambiar foto">
              📷
            </button>
          )}
        </div>
        
        <div className="profile-info">
          <h2 className="profile-name">{user.displayName}</h2>
          <span className={getRoleClass(user.role)}>
            {getRoleLabel(user.role)}
          </span>
          <p className="profile-email">{user.email}</p>
        </div>
      </div>

      {user.bio && (
        <div className="profile-section">
          <h3>Sobre mí</h3>
          <p className="profile-bio">{user.bio}</p>
        </div>
      )}

      <div className="profile-details-grid">
        {user.location && (
          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <span>{user.location}</span>
          </div>
        )}
        {user.phone && (
          <div className="detail-item">
            <span className="detail-icon">📞</span>
            <span>{user.phone}</span>
          </div>
        )}
        {user.website && (
          <div className="detail-item">
            <span className="detail-icon">🌐</span>
            <a href={user.website} target="_blank" rel="noopener noreferrer">
              Sitio Web
            </a>
          </div>
        )}
        {user.joinedDate && (
          <div className="detail-item">
            <span className="detail-icon">📅</span>
            <span>Unido: {new Date(user.joinedDate).toLocaleDateString()}</span>
          </div>
        )}
      </div>

      {onEdit && (
        <div className="profile-actions">
          <button className="btn btn-primary" onClick={onEdit}>
            Editar Perfil
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;