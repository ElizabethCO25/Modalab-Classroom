import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getAssignmentsByCourse } from '../../services/assignmentService';
import { getCoursesByStudent } from '../../services/courseService';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import './MyAssignments.css';

const MyAssignments = () => {
  const { currentUser } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAssignments = async () => {
      if (currentUser) {
        const coursesResult = await getCoursesByStudent(currentUser.uid);
        if (coursesResult.success) {
          const allAssignments = [];
          for (const course of coursesResult.data) {
            const assigResult = await getAssignmentsByCourse(course.id);
            if (assigResult.success) {
              allAssignments.push(...assigResult.data.map(a => ({ ...a, courseName: course.title })));
            }
          }
          setAssignments(allAssignments);
        }
      }
      setLoading(false);
    };
    loadAssignments();
  }, [currentUser]);

  if (loading) return <div>Cargando tareas...</div>;

  return (
    <div className="student-layout">
      <Header />
      <div className="student-container">
        <Sidebar />
        <main className="student-content">
          <h2>Mis Tareas</h2>
          {assignments.length === 0 ? (
            <p>No hay tareas pendientes.</p>
          ) : (
            <ul className="assignments-list">
              {assignments.map(assig => (
                <li key={assig.id} className="assignment-item">
                  <div className="assig-info">
                    <h4>{assig.title}</h4>
                    <span className="course-tag">{assig.courseName}</span>
                  </div>
                  <div className="assig-meta">
                    <span>Entrega: {new Date(assig.dueDate).toLocaleDateString()}</span>
                    <span className="status pending">Pendiente</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </main>
      </div>
    </div>
  );
};

export default MyAssignments;