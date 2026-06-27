import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubmission, gradeSubmission as gradeSubmissionSvc } from '../../services/submissionService';
import { getUser } from '../../services/userService';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import FileList from '../../components/FileList';
import './AdminDashboard.css';

const GradeSubmission = () => {
  const { submissionId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submission, setSubmission] = useState(null);
  const [student, setStudent] = useState(null);
  const [grade, setGrade] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (!submissionId) {
        setError('ID de entrega no proporcionado');
        setLoading(false);
        return;
      }

      try {
        const subResult = await getSubmission(submissionId);
        if (subResult.success) {
          setSubmission(subResult.data);
          setGrade(subResult.data.grade?.toString() || '');
          setFeedback(subResult.data.feedback || '');

          // Cargar datos del estudiante
          const studentResult = await getUser(subResult.data.studentId);
          if (studentResult.success) {
            setStudent(studentResult.data);
          }
        } else {
          setError(subResult.message);
        }
      } catch (err) {
        setError('Error cargando la entrega: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [submissionId]);

  const handleGrade = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const gradeValue = grade ? parseFloat(grade) : null;
      
      if (gradeValue !== null && (isNaN(gradeValue) || gradeValue < 0 || gradeValue > 100)) {
        alert('La calificación debe ser un número entre 0 y 100');
        setSubmitting(false);
        return;
      }

      const result = await gradeSubmissionSvc(submissionId, gradeValue, feedback);
      
      if (result.success) {
        alert('Calificación guardada exitosamente');
        navigate('/admin/assignments/' + submission.assignmentId);
      } else {
        alert('Error guardando calificación: ' + result.message);
      }
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="dashboard-content">
          <Sidebar role="admin" />
          <main className="main-content">
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Cargando entrega...</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (error || !submission) {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="dashboard-content">
          <Sidebar role="admin" />
          <main className="main-content">
            <div className="error-container">
              <h2>Error</h2>
              <p>{error || 'Entrega no encontrada'}</p>
              <button onClick={() => navigate(-1)} className="btn btn-secondary">
                Volver
              </button>
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
        <Sidebar role="admin" />
        <main className="main-content">
          <div className="page-header">
            <h1>Calificar Entrega</h1>
            <button onClick={() => navigate(-1)} className="btn btn-secondary">
              ← Volver
            </button>
          </div>

          <div className="grade-submission-container">
            {/* Información del estudiante */}
            <div className="card">
              <h2>Información del Estudiante</h2>
              {student ? (
                <div className="student-info">
                  <p><strong>Nombre:</strong> {student.name || 'Sin nombre'}</p>
                  <p><strong>Email:</strong> {student.email}</p>
                  <p><strong>ID:</strong> {student.id}</p>
                </div>
              ) : (
                <p>Cargando información del estudiante...</p>
              )}
            </div>

            {/* Información de la entrega */}
            <div className="card">
              <h2>Detalles de la Entrega</h2>
              <div className="submission-details">
                <p><strong>Fecha de entrega:</strong> {new Date(submission.submittedAt).toLocaleString()}</p>
                <p><strong>Estado:</strong> 
                  <span className={`status-badge status-${submission.status}`}>
                    {submission.status}
                  </span>
                </p>
                
                {submission.files && submission.files.length > 0 && (
                  <div className="files-section">
                    <h3>Archivos entregados</h3>
                    <FileList files={submission.files} showDelete={false} />
                  </div>
                )}
              </div>
            </div>

            {/* Formulario de calificación */}
            <div className="card">
              <h2>Calificación y Feedback</h2>
              <form onSubmit={handleGrade} className="grade-form">
                <div className="form-group">
                  <label htmlFor="grade">Calificación (0-100)</label>
                  <input
                    type="number"
                    id="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    placeholder="Ej: 85"
                    min="0"
                    max="100"
                    step="0.1"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="feedback">Comentarios / Feedback</label>
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Escribe tus comentarios sobre esta entrega..."
                    rows="6"
                  />
                </div>

                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={submitting}
                  >
                    {submitting ? 'Guardando...' : 'Guardar Calificación'}
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => navigate(-1)}
                    disabled={submitting}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GradeSubmission;