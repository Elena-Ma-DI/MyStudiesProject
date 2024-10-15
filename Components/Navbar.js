import LOGO from "../assets/logosmall.png" ;
import{Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import LoginIcon from '@mui/icons-material/Login';
import "../styles/Navbar.css"
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../config/firebase';



function Navbar() {

  const {user , setUser}= useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await auth.signOut(); 
      setUser(null);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const iconStyle = {
    fontSize: '22px', 
    verticalAlign: 'middle' 
  };

  
  return (
    <nav>
    <div className='Navbar'>
        <div className='kapodistrias'>
            <img src={LOGO} />
        </div>
        <div className='menu'>
            <h1>
              <span style={{color: 'rgb(150, 50, 150)', fontWeight: 'normal'}}><Link to="/"> Αρχική </Link></span>
              <span style={{color: 'rgb(150, 50, 150)', fontWeight: 'normal'}}><Link to="/Announcements"> Ανακοινώσεις </Link></span>
              <span style={{color: 'rgb(150, 50, 150)', fontWeight: 'normal'}}><Link to="/Courses"> Όλα τα μαθήματα </Link></span>
              <span style={{color: 'rgb(150, 50, 150)', fontWeight: 'normal'}}><Link to="/Services"> Υπηρεσίες </Link></span>
              <span style={{color: 'rgb(150, 50, 150)', fontWeight: 'normal'}}><Link to="/Grades"> Βαθμολογία </Link></span>
              <span style={{color: 'rgb(150, 50, 150)', fontWeight: 'normal'}}><Link to="/generalprofile"> Προφίλ </Link></span>
              <span style={{color: 'rgb(150, 50, 150)', fontWeight: 'normal'}}><Link to="/help"> Βοήθεια </Link></span>
              <span style={{color: 'rgb(150, 50, 150)', fontWeight: 'normal'}}><Link to="/"> Γλώσσα </Link></span>
              <span style={{color: 'rgb(150, 50, 150)', fontWeight: 'normal'}}>
  {user ? (
    <Link to="/" onClick={handleLogout}>Αποσύνδεση</Link>
  ) : (
    <Link to="/Login">
      <LoginIcon style={iconStyle} /> 
      Σύνδεση
    </Link>
  )}
</span>   
</h1>
        </div>
            

    </div>
</nav>
  );
}

export default Navbar