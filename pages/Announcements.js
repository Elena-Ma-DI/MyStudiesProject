import React, { useState } from 'react';
import "../styles/Announcements.css"
import Layout from '../Components/Layout';
import { Link } from 'react-router-dom';

const Announcements=() => {
    // Dummy data for announcements
    const initialAnnouncements = [
      { id: 1, title: 'Important News', content: 'This is an important announcement.' },
      { id: 2, title: 'Upcoming Event', content: 'Join us for the upcoming event next week.' },
      { id: 3, title: 'New Feature Released', content: 'Check out our latest feature release.' },
    ];
  
    const [announcements, setAnnouncements] = useState(initialAnnouncements);
  
    return (
      <Layout>
        <div className='Announcements'>
          <span style={{ color: 'rgb(150, 50, 150)', fontWeight: 'normal' }}><Link to="/" style={{ fontSize: '1.6em' }}>Αρχική/</Link><Link to="/announcements" style={{ fontSize: '1.6em' }}>Ανακοινώσεις</Link></span>        
          <h1 style={{color: 'rgb(150, 50, 150)', fontStyle: 'italic', fontWeight: 'normal'}}>Νέα &amp; Ανακοινώσεις</h1>
          <p style={{color: 'rgb(150, 50, 150)', fontStyle: 'italic'}}>Τελευταία</p>
          <ul>
            {announcements.map((announcement) => (
              <li key={announcement.id}>
                <strong>{announcement.title}</strong>
                <p>{announcement.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
  

export default Announcements;