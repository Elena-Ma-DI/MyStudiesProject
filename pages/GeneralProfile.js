import React from 'react'
import { Link } from 'react-router-dom';
import Student from '@mui/icons-material/School';
import Teacher from '@mui/icons-material/SupervisorAccount';
import "../styles/Services.css"
import Layout from '../Components/Layout';


const GeneralProfile = () => {
  return (
    <Layout>
      <div className='Services'>
      <span style={{ color: 'rgb(150, 50, 150)', fontWeight: 'normal' }}><Link to="/" style={{ fontSize: '1.6em' }}>Αρχική/</Link><Link to="/generalprofile" style={{ fontSize: '1.6em' }}>Προφίλ</Link></span>        

        <h1>Το Προφίλ για:</h1>
        <p>
          <span style={{ color: 'Black', fontWeight: 'bold' }}>Για τους φοιτητές:</span>
        </p>
        <ul style={{ color: 'Black', fontWeight: 'normal' }}>
          <li>Να δουν τις προσωπικές τους πληροφορίες</li>
          <li>Βλέπουν όλες τις πληροφορίες του Τμήματος τους</li>
          <li>Βρίσκουν τις προϋποθέσεις για την απόκτηση του πτυχίου τους</li>
        </ul>
        <p>
          <span style={{ color: 'Black', fontWeight: 'bold' }}>Για τους Διδάσκοντες:</span>
        </p>
        <ul style={{ color: 'Black', fontWeight: 'normal' }}>
          <li>Να δουν τις προσωπικές τους πληροφορίες</li>
          <li>δεν ξερω τι αλλο</li>
          <li></li>
          <li></li>
        </ul>
        <div>
          <Link to="/profilestudent"><button><Student/><span>ΦΟΙΤΗΤΕΣ/ΤΡΙΕΣ</span></button></Link>{/*ΤΟ ΛΙΝΚ ΕΔΩ ΠΕΤΑΕΙ ΣΤΗΝ ΣΕΛΙΔΑ ΣΥΝΔΕΣΗΣ ΚΑΙ ΜΕΤΑ ΣΤΙΣ ΥΠΗΡΕΣΙΕΣ */}
          <Link to="/profileteacher"><button><Teacher/><span>ΔΙΔΑΣΚΟΝΤΕΣ/ΟΥΣΕΣ</span></button></Link>{/*ΤΟ ΛΙΝΚ ΕΔΩ ΠΕΤΑΕΙ ΣΤΗΝ ΣΕΛΙΔΑ ΣΥΝΔΕΣΗΣ ΚΑΙ ΜΕΤΑ ΣΤΙΣ ΥΠΗΡΕΣΙΕΣ */}
        </div>
      </div>
    </Layout>
  );
}

export default GeneralProfile