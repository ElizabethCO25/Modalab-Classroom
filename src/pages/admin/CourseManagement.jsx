import React, { useState, useEffect } from 'react';
import { getAllCourses, createCourse, updateCourse, deleteCourse } from '../../services/courseService';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import './CourseManagement.css';

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', teacherId: '' });

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const result = await getAllCourses();
    if (result.success) setCourses(result.data);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCourse(formData);
    loadCourses();
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar curso?')) {
      await deleteCourse(id);
      loadCourses();
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
            <h2>Gestión de Cursos</h2>
            <button onClick={() => setShowModal(true)} className="btn-primary">Nuevo Curso</button>
          </div>
          
          <div className="cards-grid">
            {courses.map(course => (
              <div key={course.id} className="card-item">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button onClick={() => handleDelete(course.id)} className="btn-danger">Eliminar</button>
              </div>
            ))}
          </div>

          {showModal && (
            <div className="modal-overlay">
              <div className="modal">
                <h3>Nuevo Curso</h3>
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Título" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
                  <textarea placeholder="Descripción" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required />
                  <input type="text" placeholder="ID Profesor" value={formData.teacherId} onChange={e => setFormData({...formData, teacherId: e.target.value})} required />
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

export default CourseManagement;