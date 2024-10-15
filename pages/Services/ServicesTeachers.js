import React from 'react'
import "../../styles/ServicesStudents.css"
import { Link } from 'react-router-dom';
import History from '@mui/icons-material/HistoryToggleOffOutlined';
import Dilosi from '@mui/icons-material/NoteAddOutlined';
import IstorikoAitisewn from '@mui/icons-material/RestorePageOutlined';
import Aitisi from '@mui/icons-material/CreateNewFolderOutlined';
import Layout from '../../Components/Layout';

function ServicesStuudents() {
  return (
    <Layout>
        <div>ServicesStudents</div>
        <span style={{ color: 'rgb(150, 50, 150)', fontWeight: 'normal' }}><Link to="/" style={{ fontSize: '1.6em' }}>Αρχική/</Link><Link to="/services" style={{ fontSize: '1.6em' }}>Υπηρεσίες/</Link>
        <Link to="/servicesteacher" style={{ fontSize: '1.6em' }}>Καθηγητές/</Link></span>
        <div className='Services'>
            <h1>Υπηρεσίες για Καθηγητές:</h1>
            <Link to="/Aithseis"><button><IstorikoAitisewn/><span>Ιστορικό Αιτήσεων</span></button></Link>{/*ΤΟ ΛΙΝΚ ΕΔΩ ΠΕΤΑΕΙ ΣΤΗΝ ΣΕΛΙΔΑ ΣΥΝΔΕΣΗΣ ΚΑΙ ΜΕΤΑ ΣΤΙΣ ΥΠΗΡΕΣΙΕΣ */}            
            <Link to="/aithseisteacher"><button><Aitisi/><span>Νέα Αίτηση</span></button></Link>{/*ΤΟ ΛΙΝΚ ΕΔΩ ΠΕΤΑΕΙ ΣΤΗΝ ΣΕΛΙΔΑ ΣΥΝΔΕΣΗΣ ΚΑΙ ΜΕΤΑ ΣΤΙΣ ΥΠΗΡΕΣΙΕΣ */}
           

        </div>
    </Layout>
  )
}

export default ServicesStuudents