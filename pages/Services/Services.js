import React from 'react'
import { Link } from 'react-router-dom';
import Student from '@mui/icons-material/School';
import Teacher from '@mui/icons-material/SupervisorAccount';
import "../../styles/Services.css"
import Layout from '../../Components/Layout';

const Services = () => {
  return (
    <Layout>
      <div className='Services'>
        <span style={{ color: 'rgb(150, 50, 150)', fontWeight: 'normal' }}><Link to="/" style={{ fontSize: '1.6em' }}>Αρχική/</Link><Link to="/services" style={{ fontSize: '1.6em' }}>Υπηρεσίες</Link></span>        

        <h1>Υπηρεσίες για:</h1>
        <p>Εδώ θα βρουν οι χρήστες όλες τις υπηρεσίες της Ηλεκτρονικής Γραμματείας ανάλογα με την ιδιότητα τους. </p>
        <p>
          <span style={{ color: 'Black', fontWeight: 'bold' }}>Για τους φοιτητές:</span>
        </p>
        <ul style={{ color: 'Black', fontWeight: 'normal' }}>
          <li>Βλέπουν το Ιστορικό των δηλώσεων τους</li>
          <li>Κάνουν Δήλωση μαθημάτων</li>
          <li>Βλέπουν το Ιστορικό των Αιτήσεων τους</li>
          <li>Κάνουν Αίτηση στην Γραμματεία του Τμήματος</li>
        </ul>
        <p>
          <span style={{ color: 'Black', fontWeight: 'bold' }}>Για τους Διδάσκοντες:</span>
        </p>
        <ul style={{ color: 'Black', fontWeight: 'normal' }}>
          <li>Βλέπουν το Ιστορικό των Αιτήσεων τους</li>
          <li>Κάνουν νέα αίτηση</li>
        </ul>
        <div>
          <Link to="/servicesstudent"><button><Student/><span>ΦΟΙΤΗΤΕΣ/ΤΡΙΕΣ</span></button></Link>{/*ΤΟ ΛΙΝΚ ΕΔΩ ΠΕΤΑΕΙ ΣΤΗΝ ΣΕΛΙΔΑ ΣΥΝΔΕΣΗΣ ΚΑΙ ΜΕΤΑ ΣΤΙΣ ΥΠΗΡΕΣΙΕΣ */}
          <Link to="/servicesteacher"><button><Teacher/><span>ΚΑΘΗΓΗΤΕΣ/ΤΡΙΕΣ</span></button></Link>{/*ΤΟ ΛΙΝΚ ΕΔΩ ΠΕΤΑΕΙ ΣΤΗΝ ΣΕΛΙΔΑ ΣΥΝΔΕΣΗΣ ΚΑΙ ΜΕΤΑ ΣΤΙΣ ΥΠΗΡΕΣΙΕΣ */}
        </div>
      </div>
    </Layout>
  );
}

export default Services