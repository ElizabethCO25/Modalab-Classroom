import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { getCoursesByStudent } from '../../services/courseService';
import CourseCard from '../../components/CourseCard';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import './MyCourses.css';

const MyCourses = () => {
  const { currentUser } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMyCourses = async () => {
      if (currentUser) {
        const result = await getCoursesByStudent(currentUser.uid);
        if (result.success) setCourses(result.data);
      }
      setLoading(false);
    };
    loadMyCourses();
  }, [currentUser]);

  if (loading) return <div>Cargando cursos...</div>;

  return (
    <div className="student-layout">
      <Header />
      <div className="student-container">
        <Sidebar />
        <main className="student-content">
          <h2>Mis Cursos</h2>
          {courses.length === 0 ? (
            <p>No estás inscrito en ningún curso aún.</p>
          ) : (
            <div className="courses-grid">
              {courses.map(course => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  teacher={course.teacherName}
                  studentsCount={course.students?.length}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MyCourses;