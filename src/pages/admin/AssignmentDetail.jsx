import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAssignment, updateAssignment } from '../../services/assignmentService';
import { getSubmissionsByAssignment } from '../../services/submissionService';
import { getUser } from '../../services/userService';
import { getCourse } from '../../services/courseService';
import FileList from '../../components/FileList';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import './AssignmentDetail.css';

const AssignmentDetail = () => {
  const { assignmentId } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState(null);
  const [course, setCourse] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [students, setStudents] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Cargar datos de la tarea
        const assignmentResult = await getAssignment(assignmentId);
        if (!assignmentResult.success) {
          throw new Error(assignmentResult.message);
        }
        const assignmentData = assignmentResult.data;
        setAssignment(assignmentData);

        // Cargar datos del curso
        const courseResult = await getCourse(assignmentData.courseId);
        if (courseResult.success) {
          setCourse(courseResult.data);
        }

        // Cargar entregas de los estudiantes
        const submissionsResult = await getSubmissionsByAssignment(assignmentId);
        if (submissionsResult.success) {
          const submissionsData = submissionsResult.data;
          setSubmissions(submissionsData);

          // Cargar información de cada estudiante que entregó
          const studentIds = submissionsData.map(s => s.studentId);
          const studentsData = {};
          
          for (const studentId of studentIds) {
            const userResult = await getUser(studentId);
            if (userResult.success) {
              studentsData[studentId] = userResult.data;
            }
          }
          setStudents(studentsData);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, [assignmentId]);

  const handleGradeSubmission = (submissionId) => {
    navigate(`/admin/grade/${submissionId}`, { 
      state: { assignmentId, assignmentTitle: assignment?.title } 
    });
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: { text: 'Pendiente', class: 'badge-pending' },
      submitted: { text: 'Entregado', class: 'badge-submitted' },
      graded: { text: 'Calificado', class: 'badge-graded' },
      late: { text: 'Tardío', class: 'badge-late' }
    };
    const badge = badges[status] || badges.pending;
    return <span className={`status-badge ${badge.class}`}>{badge.text}</span>;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isOverdue = () => {
    if (!assignment?.dueDate) return false;
    return new Date() > new Date(assignment.dueDate);
  };

  if (loading) {
    return (
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar role="admin" />
          <div className="content-area">
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Cargando detalles de la tarea...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar role="admin" />
          <div className="content-area">
            <div className="error-container">
              <h3>Error al cargar la tarea</h3>
              <p>{error}</p>
              <button onClick={() => navigate('/admin/courses')} className="btn-primary">
                Volver a Cursos
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar role="admin" />
        <div className="content-area">
          <div className="assignment-detail-page">
            {/* Encabezado de la tarea */}
            <div className="assignment-header">
              <button onClick={() => navigate(-1)} className="btn-back">
                ← Volver
              </button>
              <h1>{assignment?.title}</h1>
              {course && (
                <p className="course-info">Curso: <strong>{course.title}</strong></p>
              )}
              
              <div className="assignment-meta">
                <div className="meta-item">
                  <span className="meta-label">Fecha de entrega:</span>
                  <span className={`meta-value ${isOverdue() ? 'overdue' : ''}`}>
                    {formatDate(assignment?.dueDate)}
                    {isOverdue() && !assignment?.extendedDueDate && (
                      <span className="overdue-indicator"> (Vencida)</span>
                    )}
                  </span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Calificación máxima:</span>
                  <span className="meta-value">{assignment?.maxGrade} puntos</span>
                </div>
              </div>
            </div>

            {/* Descripción e instrucciones */}
            <div className="assignment-section">
              <h2>Descripción</h2>
              <p className="assignment-description">{assignment?.description}</p>
              
              {assignment?.instructions && (
                <>
                  <h3>Instrucciones</h3>
                  <div className="instructions-content" dangerouslySetInnerHTML={{ __html: assignment.instructions }} />
                </>
              )}

              {/* Archivos adjuntos de la tarea */}
              {assignment?.attachments && assignment.attachments.length > 0 && (
                <div className="attachments-section">
                  <h3>Archivos adjuntos</h3>
                  <FileList files={assignment.attachments} showDelete={false} />
                </div>
              )}
            </div>

            {/* Lista de entregas de estudiantes */}
            <div className="submissions-section">
              <div className="submissions-header">
                <h2>Entregas de Estudiantes</h2>
                <span className="submissions-count">
                  {submissions.length} {submissions.length === 1 ? 'entrega' : 'entregas'}
                </span>
              </div>

              {submissions.length === 0 ? (
                <div className="no-submissions">
                  <p>Aún no hay entregas para esta tarea</p>
                </div>
              ) : (
                <div className="submissions-table-container">
                  <table className="submissions-table">
                    <thead>
                      <tr>
                        <th>Estudiante</th>
                        <th>Fecha de entrega</th>
                        <th>Estado</th>
                        <th>Calificación</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {submissions.map((submission) => {
                        const student = students[submission.studentId] || {};
                        const isLate = submission.submittedAt && assignment?.dueDate && 
                                      new Date(submission.submittedAt) > new Date(assignment.dueDate);
                        const status = submission.grade ? 'graded' : (isLate ? 'late' : 'submitted');

                        return (
                          <tr key={submission.id}>
                            <td className="student-info">
                              <div className="student-name">
                                {student.name || 'Estudiante desconocido'}
                              </div>
                              <div className="student-email">{student.email || ''}</div>
                            </td>
                            <td>{formatDate(submission.submittedAt)}</td>
                            <td>{getStatusBadge(status)}</td>
                            <td className="grade-cell">
                              {submission.grade !== undefined && submission.grade !== null ? (
                                <span className="grade-value">{submission.grade}/{assignment.maxGrade}</span>
                              ) : (
                                <span className="no-grade">-</span>
                              )}
                            </td>
                            <td className="actions-cell">
                              <button 
                                onClick={() => handleGradeSubmission(submission.id)}
                                className="btn-grade"
                                disabled={!!submission.grade}
                              >
                                {submission.grade ? 'Ver Calificación' : 'Calificar'}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetail;