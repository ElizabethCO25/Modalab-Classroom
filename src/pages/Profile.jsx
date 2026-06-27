import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getProfile, updateProfile, uploadProfilePicture } from '../services/profileService';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProfileCard from '../components/ProfileCard';
import './Profile.css';

const Profile = () => {
  const { currentUser } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  
  // Estado para edición
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    bio: '',
    phone: '',
    location: ''
  });
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      if (!currentUser) return;

      try {
        setLoading(true);
        const result = await getProfile(currentUser.uid);
        
        if (result.success) {
          setProfileData(result.data);
          setFormData({
            displayName: result.data.displayName || '',
            bio: result.data.bio || '',
            phone: result.data.phone || '',
            location: result.data.location || ''
          });
        } else {
          setError(result.message);
        }
      } catch (err) {
        console.error('Error cargando perfil:', err);
        setError('No se pudo cargar el perfil.');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    try {
      setLoading(true);
      const result = await updateProfile(currentUser.uid, formData);
      
      if (result.success) {
        setSuccessMsg('Perfil actualizado correctamente');
        setIsEditing(false);
        // Recargar datos actualizados
        const updated = await getProfile(currentUser.uid);
        if (updated.success) setProfileData(updated.data);
        
        setTimeout(() => setSuccessMsg(''), 3000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error('Error guardando perfil:', err);
      setError('Error al guardar los cambios.');
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !currentUser) return;

    try {
      setUploadingPhoto(true);
      const result = await uploadProfilePicture(currentUser.uid, file);
      
      if (result.success) {
        setSuccessMsg('Foto de perfil actualizada');
        // Recargar datos
        const updated = await getProfile(currentUser.uid);
        if (updated.success) setProfileData(updated.data);
        
        setTimeout(() => setSuccessMsg(''), 3000);
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error('Error subiendo foto:', err);
      setError('Error al subir la imagen.');
    } finally {
      setUploadingPhoto(false);
      // Limpiar input file
      e.target.value = ''; 
    }
  };

  if (loading && !profileData) {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="dashboard-content">
          <Sidebar />
          <main className="main-content">
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Cargando perfil...</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (error && !profileData) {
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
        
        <main className="main-content profile-page">
          <div className="page-header">
            <h1>Mi Perfil</h1>
            <p>Gestiona tu información personal y foto de perfil.</p>
          </div>

          {successMsg && <div className="success-alert">{successMsg}</div>}
          {error && <div className="error-alert">{error}</div>}

          <div className="profile-layout">
            {/* Columna Izquierda: Tarjeta de Vista Previa */}
            <div className="profile-preview-col">
              <ProfileCard 
                user={profileData} 
                onEdit={() => setIsEditing(true)} 
              />
            </div>

            {/* Columna Derecha: Formulario de Edición */}
            <div className="profile-form-col">
              <div className="card">
                <div className="card-header">
                  <h3>Editar Información</h3>
                </div>
                <div className="card-body">
                  {!isEditing ? (
                    <div className="text-center p-4">
                      <p>Haz clic en "Editar Perfil" en la tarjeta de la izquierda o en el botón de abajo para modificar tus datos.</p>
                      <button onClick={() => setIsEditing(true)} className="btn btn-primary mt-3">
                        Editar Perfil
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSaveProfile}>
                      <div className="form-group">
                        <label htmlFor="displayName">Nombre Completo</label>
                        <input
                          type="text"
                          id="displayName"
                          name="displayName"
                          value={formData.displayName}
                          onChange={handleInputChange}
                          className="form-control"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="bio">Biografía / Sobre mí</label>
                        <textarea
                          id="bio"
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          className="form-control"
                          rows="4"
                          placeholder="Cuéntanos algo sobre ti..."
                        />
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="phone">Teléfono</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="+54 9 11..."
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="location">Ubicación</label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Ciudad, País"
                          />
                        </div>
                      </div>

                      <div className="form-actions">
                        <button type="submit" className="btn btn-success" disabled={loading}>
                          {loading ? 'Guardando...' : 'Guardar Cambios'}
                        </button>
                        <button 
                          type="button" 
                          className="btn btn-secondary" 
                          onClick={() => {
                            setIsEditing(false);
                            // Restaurar valores originales
                            setFormData({
                              displayName: profileData.displayName || '',
                              bio: profileData.bio || '',
                              phone: profileData.phone || '',
                              location: profileData.location || ''
                            });
                          }}
                        >
                          Cancelar
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* Sección de Cambio de Foto */}
              <div className="card mt-4">
                <div className="card-header">
                  <h3>Cambiar Foto de Perfil</h3>
                </div>
                <div className="card-body">
                  <p className="text-muted mb-3">Sube una nueva imagen para actualizar tu avatar. Formatos recomendados: JPG, PNG.</p>
                  
                  <div className="file-upload-area">
                    <label className="custom-file-upload">
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handlePhotoChange} 
                        disabled={uploadingPhoto}
                      />
                      {uploadingPhoto ? 'Subiendo...' : '📁 Seleccionar Imagen'}
                    </label>
                    {uploadingPhoto && <span className="upload-progress">Subiendo imagen...</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;