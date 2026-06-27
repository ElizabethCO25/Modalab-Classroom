import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, description, teacher, studentsCount, onClick }) => {
  return (
    <div className="course-card" onClick={onClick}>
      <div className="course-card-header">
        <h3>{title}</h3>
        <span className="course-students">{studentsCount || 0} alumnos</span>
      </div>
      <p className="course-description">{description}</p>
      <div className="course-footer">
        <span className="course-teacher">Prof: {teacher}</span>
        <button className="btn-view">Ver Curso</button>
      </div>
    </div>
  );
};

export default CourseCard;