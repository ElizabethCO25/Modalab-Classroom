import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import FileUpload from '../../components/FileUpload';
import FileList from '../../components/FileList';
import { getAssignment } from '../../services/assignmentService';
import { getCourse } from '../../services/courseService';
import { 
  createSubmission, 
  getSubmissionByStudentAndAssignment, 
  updateSubmissionFiles 
} from '../../services/submissionService';
import './StudentDashboard.css';

const StudentAssignmentDetail = () => {
  const { assignmentId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [assignment, setAssignment] = useState(null);
  const [course, setCourse] = useState(null);
  const [submission, setSubmission] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) return;

      try {
        setLoading(true);
        
        // Obtener detalles de la tarea
        const assignmentResult = await getAssignment(assignmentId);
        if (!assignmentResult.success) {
          throw new Error(assignmentResult.message || 'Error al cargar la tarea');
        }
        setAssignment(assignmentResult.data);

        // Obtener detalles del curso
        const courseResult = await getCourse(assignmentResult.data.courseId);
        if (courseResult.success) {
          setCourse(courseResult.data);
        }

        // Verificar si el estudiante ya tiene una entrega
        const submissionResult = await getSubmissionByStudentAndAssignment(
          currentUser.uid,
          assignmentId
        );
        
        if (submissionResult.success && submissionResult.data) {
          setSubmission(submissionResult.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [assignmentId, currentUser]);

  const handleFileUpload = async (files) => {
    if (!files || files.length === 0) return;

    try {
      setUploading(true);
      setUploadProgress(0);
      setMessage({ type: '', text: '' });

      // Preparar datos de archivos para subir
      const filesData = [];
      
      for (const file of files) {
        // Aquí se llamaría al servicio de storage para cada archivo
        // Simulamos la estructura que devolvería storageService
        const fileData = {
          name: file.name,
          size: file.size,
          type: file.type,
          uploadedAt: new Date().toISOString(),
          // La URL real se obtendría después de subir a Storage
          url: '#', 
          path: `submissions/${assignmentId}/${currentUser.uid}/${file.name}`
        };
        filesData.push(fileData);
        
        // Simular progreso (en implementación real, esto vendría del callback de uploadFile)
        setUploadProgress(prev => Math.min(prev + (100 / files.length), 95));
      }

      let result;
      if (submission) {
        // Actualizar entrega existente (agregar más archivos)
        const updatedFiles = [...(submission.files || []), ...filesData];
        result = await updateSubmissionFiles(submission.id, updatedFiles);
      } else {
        // Crear nueva entrega
        result = await createSubmission({
          assignmentId,
          studentId: currentUser.uid,
          studentName: currentUser.displayName || currentUser.email,
          studentEmail: currentUser.email,
          courseId: assignment.courseId,
          files: filesData,
          status: 'submitted',
          submittedAt: new Date().toISOString()
        });
      }

      if (result.success) {
        setMessage({ 
          type: 'success', 
          text: submission ? 'Archivos agregados correctamente' : 'Entrega enviada correctamente' 
        });
        
        // Recargar datos de la entrega
        const updatedSubmissionResult = await getSubmissionByStudentAndAssignment(
          currentUser.uid,
          assignmentId
        );
        
        if (updatedSubmissionResult.success) {
          setSubmission(updatedSubmissionResult.data);
        }
        
        setUploadProgress(100);
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      setMessage({ type: 'error', text: `Error: ${err.message}` });
    } finally {
      setUploading(false);
      setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="dashboard-content">
          <Sidebar />
          <main className="main-content">
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Cargando detalles de la tarea...</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="dashboard-content">
          <Sidebar />
          <main className="main-content">
            <div className="error-container">
              <h2>Error</h2>
              <p>{error}</p>
              <button onClick={() => navigate('/student/my-assignments')} className="btn btn-primary">
                Volver a Mis Tareas
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const isLate = assignment && new Date(assignment.dueDate) < new Date();
  const canSubmit = !isLate && (!submission || submission.status !== 'graded');

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <div className="page-header">
            <h1>Detalle de Tarea</h1>
            <button onClick={() => navigate('/student/my-assignments')} className="btn btn-secondary">
              ← Volver
            </button>
          </div>

          {message.text && (
            <div className={`alert alert-${message.type}`}>
              {message.text}
            </div>
          )}

          <div className="assignment-detail-card">
            <div className="assignment-header">
              <h2>{assignment?.title}</h2>
              {course && (
                <span className="course-badge">{course.title}</span>
              )}
            </div>

            <div className="assignment-info-grid">
              <div className="info-item">
                <strong>Fecha de entrega:</strong>
                <span className={isLate ? 'late-date' : ''}>
                  {new Date(assignment?.dueDate).toLocaleDateString('es-ES', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
                {isLate && <span className="late-label"> (Vencida)</span>}
              </div>
              
              <div className="info-item">
                <strong>Calificación máxima:</strong>
                <span>{assignment?.maxGrade} puntos</span>
              </div>

              <div className="info-item">
                <strong>Estado:</strong>
                <span className={`status-badge status-${submission?.status || 'pending'}`}>
                  {submission?.status === 'submitted' ? 'Entregado' : 
                   submission?.status === 'graded' ? 'Calificado' : 
                   submission?.status === 'late' ? 'Vencido' : 'Pendiente'}
                </span>
              </div>

              {submission?.grade !== undefined && (
                <div className="info-item">
                  <strong>Tu calificación:</strong>
                  <span className="grade-display">{submission.grade}/{assignment?.maxGrade}</span>
                </div>
              )}
            </div>

            <div className="assignment-section">
              <h3>Instrucciones</h3>
              <p className="assignment-description">{assignment?.description || 'Sin descripción disponible'}</p>
            </div>

            {assignment?.attachments && assignment.attachments.length > 0 && (
              <div className="assignment-section">
                <h3>Archivos adjuntos del profesor</h3>
                <FileList files={assignment.attachments} showDelete={false} />
              </div>
            )}

            {canSubmit && (
              <div className="assignment-section submission-section">
                <h3>Enviar tu entrega</h3>
                <p className="section-help">
                  Sube tus archivos aquí. Puedes subir múltiples archivos a la vez.
                  {submission && submission.files?.length > 0 
                    ? ' Esto se agregará a tu entrega existente.' 
                    : ' Esta será tu primera entrega.'}
                </p>
                
                <FileUpload 
                  onUpload={handleFileUpload}
                  accept=".pdf,.doc,.docx,.txt,.zip,.rar,.jpg,.jpeg,.png,.gif"
                  multiple={true}
                  disabled={uploading}
                />
                
                {uploading && (
                  <div className="upload-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{Math.round(uploadProgress)}%</span>
                  </div>
                )}
              </div>
            )}

            {submission && submission.files && submission.files.length > 0 && (
              <div className="assignment-section">
                <h3>Tus archivos entregados</h3>
                <p className="section-help">
                  Entregado el: {new Date(submission.submittedAt).toLocaleDateString('es-ES')}
                </p>
                <FileList files={submission.files} showDelete={false} />
              </div>
            )}

            {submission?.feedback && (
              <div className="assignment-section feedback-section">
                <h3>Comentarios del profesor</h3>
                <div className="feedback-content">
                  {submission.feedback}
                </div>
                {submission.gradedAt && (
                  <p className="graded-date">
                    Calificado el: {new Date(submission.gradedAt).toLocaleDateString('es-ES')}
                  </p>
                )}
              </div>
            )}

            {!canSubmit && !submission && (
              <div className="alert alert-warning">
                <p>
                  {isLate 
                    ? 'La fecha de entrega ha vencido. Ya no puedes enviar esta tarea.' 
                    : 'Esta tarea aún no ha sido entregada ni calificada, pero parece haber un problema para enviar.'}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentAssignmentDetail;