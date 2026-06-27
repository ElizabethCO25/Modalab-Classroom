import React, { useState, useEffect } from 'react';
import { getAllUsers, createUser, updateUser, deleteUser } from '../../services/userService';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import './UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'student' });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await getAllUsers();
    if (result.success) setUsers(result.data);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica simplificada para crear/actualizar
    alert('Funcionalidad de guardado pendiente de implementar con Auth');
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar usuario?')) {
      await deleteUser(id);
      loadUsers();
    }
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="admin-layout">
      <Header />
      <div className="admin-container">
        <Sidebar />
        <main className="admin-content">
          <div className="page-header">
            <h2>Gestión de Usuarios</h2>
            <button onClick={() => setShowModal(true)} className="btn-primary">Nuevo Usuario</button>
          </div>
          
          <table className="data-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button onClick={() => handleDelete(user.id)} className="btn-danger">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showModal && (
            <div className="modal-overlay">
              <div className="modal">
                <h3>{formData.id ? 'Editar' : 'Nuevo'} Usuario</h3>
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Nombre" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                  <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                  <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})}>
                    <option value="student">Alumno</option>
                    <option value="admin">Administrador</option>
                  </select>
                  <div className="modal-actions">
                    <button type="button" onClick={() => setShowModal(false)}>Cancelar</button>
                    <button type="submit">Guardar</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default UserManagement;