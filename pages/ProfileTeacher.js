import React from 'react';
import { Navigate } from 'react-router-dom';
import FormPageteach from './FormPageteach'; 
import Layout from '../Components/Layout';
import { Link } from 'react-router-dom';

const ProfileTeacher=({ authorized }) => {
  if (!authorized) {
    // Redirect to the login page
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      <div>
      <span style={{ color: 'rgb(150, 50, 150)', fontWeight: 'normal' }}><Link to="/" style={{ fontSize: '1.6em' }}>Αρχική/</Link><Link to="/generalprofile" style={{ fontSize: '1.6em' }}>Προφίλ</Link>
      <Link to="/profileteacher" style={{ fontSize: '1.6em' }}>Προφίλ Καθηγητή</Link></span>        

        <FormPageteach />
      </div>
    </Layout>
  );
}

export default ProfileTeacher;
