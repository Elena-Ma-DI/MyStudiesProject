import React, { useContext } from 'react'
import "../styles/ServicesStudents.css"
import { Link, useNavigate } from 'react-router-dom';
import History from '@mui/icons-material/HistoryToggleOffOutlined';
import Dhlwsh from '@mui/icons-material/NoteAddOutlined';
import IstorikoAitisewn from '@mui/icons-material/RestorePageOutlined';
import Aitisi from '@mui/icons-material/CreateNewFolderOutlined';
import Layout from '../Components/Layout';
import { AuthContext } from '../context/AuthContext';
import New_Aithseis from './New_Aithseis';
import Aithseis from './Services/Aithseis';


function ServicesStuudents() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    if (!user) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  return (
    <Layout>
        <div>ServicesStudents</div>
        <span style={{ color: 'rgb(150, 50, 150)', fontWeight: 'normal' }}><Link to="/" style={{ fontSize: '1.6em' }}>Αρχική/</Link><Link to="/services" style={{ fontSize: '1.6em' }}>Υπηρεσίες/</Link>
        <Link to="/servicesstudent" style={{ fontSize: '1.6em' }}>Φοιτητές/</Link></span>
        <div className='Services'>
            <h1>Υπηρεσίες για φοιτητές:</h1>

            <button onClick={() => handleButtonClick('/istorikodilwsewn')}>
                <History/>
                <span>Ιστορικό Δηλώσεων</span>
            </button>
            <button onClick={() => handleButtonClick('/Dhlwsh')}>
                <Dhlwsh/>
                <span>Δήλωση μαθημάτων</span>
            </button>
            <button onClick={() => handleButtonClick('/Aithseis')}>
                <IstorikoAitisewn/>
                <span>Ιστορικό Αιτήσεων</span>
            </button>
            <button onClick={() => handleButtonClick('/New_Aithseis')}>
                <Aitisi/>
                <span>Νέα Αίτηση</span>
            </button>
        </div>
    </Layout>
  );
}

export default ServicesStuudents;

