import React from 'react';
import { Navigate } from 'react-router-dom';
import FormPage from './FormPage'; 
import Layout from '../Components/Layout';
import { Link } from 'react-router-dom';

const Profilestudent=({ authorized }) => {
  if (!authorized) {
    // Redirect to the login page
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <div>
      <span style={{ color: 'rgb(150, 50, 150)', fontWeight: 'normal' }}><Link to="/" style={{ fontSize: '1.6em' }}>Αρχική/</Link><Link to="/generalprofile" style={{ fontSize: '1.6em' }}>Προφίλ</Link>
      <Link to="/profilestudent" style={{ fontSize: '1.6em' }}>Προφίλ Φοιτητή</Link></span>        

        <FormPage />
      </div>
    </Layout>
  );
}

export default Profilestudent;
