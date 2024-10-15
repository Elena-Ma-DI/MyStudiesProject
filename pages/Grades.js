import React from 'react'
import { Link } from 'react-router-dom';
import Student from '@mui/icons-material/School';
import Teacher from '@mui/icons-material/SupervisorAccount';
import "../styles/Services.css"
import Layout from '../Components/Layout';


const Grades = () => {
  return (
    <Layout>
      <div className='Services'>
      <span style={{ color: 'rgb(150, 50, 150)', fontWeight: 'normal' }}><Link to="/" style={{ fontSize: '1.6em' }}>Αρχική/</Link><Link to="/grades" style={{ fontSize: '1.6em' }}>Βαθμολογίες</Link></span>        

        <h1>Βαθμολογία για:</h1>
        <p>
          <span style={{ color: 'Black', fontWeight: 'bold' }}>Για τους φοιτητές:</span>
        </p>
        <ul style={{ color: 'Black', fontWeight: 'normal' }}>
          <li>Βλέπουν την πρόσφατη βαθμολογία τους</li>
          <li>Βλέπουν την αναλυτική βαθμολογία τους</li>
        </ul>
        <p>
          <span style={{ color: 'Black', fontWeight: 'bold' }}>Για τους Διδάσκοντες:</span>
        </p>
        <ul style={{ color: 'Black', fontWeight: 'normal' }}>
          <li>Δημιουργούν νέο βαθμολόγιο</li>
          <li>Παρακολουθούν ένα ήδη υπάρχον βαθμολόγιο (είτε βρίσκεται σε κατάσταση προσωρινής αποθήκευσης είτε σε κατάσταση οριστικής υποβολής) </li>
        </ul>
        <div>
          <Link to="/gradesstudent"><button><Student/><span>ΦΟΙΤΗΤΕΣ/ΤΡΙΕΣ</span></button></Link>{/*ΤΟ ΛΙΝΚ ΕΔΩ ΠΕΤΑΕΙ ΣΤΗΝ ΣΕΛΙΔΑ ΣΥΝΔΕΣΗΣ ΚΑΙ ΜΕΤΑ ΣΤΙΣ ΥΠΗΡΕΣΙΕΣ */}
          <Link to="/gradesTeacher"><button><Teacher/><span>ΔΙΔΑΣΚΟΝΤΕΣ/ΟΥΣΕΣ</span></button></Link>{/*ΤΟ ΛΙΝΚ ΕΔΩ ΠΕΤΑΕΙ ΣΤΗΝ ΣΕΛΙΔΑ ΣΥΝΔΕΣΗΣ ΚΑΙ ΜΕΤΑ ΣΤΙΣ ΥΠΗΡΕΣΙΕΣ */}
        </div>
      </div>
    </Layout>
  );
}

export default Grades