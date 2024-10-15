// GradeTeacher.js
import React, { useState, useEffect } from 'react';
import {jsPDF} from 'jspdf';
import autoTable from 'jspdf-autotable';
import Layout from '../Components/Layout';
import { db } from '../config/firebase';
import { collection, where, onSnapshot  } from 'firebase/firestore';
import { doc, updateDoc } from 'firebase/firestore';
import Eam from './eam.js';
import Sxbd from './sxbd.js';



function CourseSelector({ onCourseChange }) {
    const courses = ['EAM', 'SXBD'];

    const handleCourseChange = (event) => {
        onCourseChange(event.target.value);
    };

    return (
        <select onChange={handleCourseChange}>
            {courses.map(course => <option key={course} value={course}>{course}</option>)}
        </select>
    );
}

function GradeTeacher() {

    const [course, setCourse] = useState('EAM');

    const handleCourseChange = (selectedCourse) => {
        setCourse(selectedCourse);
      };
    

    return (
        <Layout>
            <h1>Βαθμολογίες</h1>

<div>
      <CourseSelector onCourseChange={handleCourseChange} />

      {course === 'EAM' && <Eam />}
      {course === 'SXBD' && <Sxbd />}
    </div>

        </Layout>
    );
}



export default GradeTeacher;

