import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import "../styles/Home.css";
import Layout from '../Components/Layout';

const Home=()=> {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) =>{
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) =>{
    event.preventDefault();
    //handle the search logic here
    console.log('Search Term:', searchTerm);
    //Potentially navigate to a search results page or filter data on the current page
  };
  
  return (
    <Layout>
    <div className='Home'>
      <div className='HeaderContainer'>
        <h1>
          <span style={{color: 'rgb(150, 50, 150)', fontStyle: 'italic', fontWeight: 'normal'}}>Βρείτε την πληροφορία που σας ενδιαφέρει</span>
          <br />
          <span style={{ color: 'rgb(114, 11, 130)'}}>εύκολα και γρήγορα</span>
        </h1>
      </div>
      <div className="contentContainer">
        <div className="searchContainer">
          <form onSubmit={handleSearchSubmit}>
            <TextField
              className="muiTextField-root"
              placeholder="Αναζήτηση..."
              value={searchTerm}
              onChange={handleSearchChange}
              variant="outlined"
              InputProps={{
                startAdornment: (                  
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </div>
        <div className="textContainer">
          <p>
            <span style={{ color: 'Black', fontWeight: 'bold' }}>Φοιτητές:</span>
          </p>
          <ul style={{ color: 'Black', fontWeight: 'normal' }}>
            <li>βλέπουν τα μαθήματα και τους βαθμούς τους</li>
            <li>υποβάλλουν ηλεκτρονικά τη δήλωση μαθημάτων τους</li>
            <li>διεκπεραιώνουν ηλεκτρονικά αιτήσεις για έκδοση πιστοποιητικών/περάτωση σπουδών/συμμετοχή σε ορκωμοσία</li>
          </ul>
          <p>
            <span style={{ color: 'Black', fontWeight: 'bold' }}>Διδάσκοντες:</span>
          </p>
          <ul style={{ color: 'Black', fontWeight: 'normal' }}>
            <li>βλέπουν τα μαθήματα, τις τάξεις, τους φοιτητές και τους βαθμούς των φοιτητών τους</li>
            <li>υποβάλλουν ηλεκτρονικά τα βαθμολόγια τους</li>
            <li>Βλέπουν αναλυτικά το προγραμμά τους</li>
          </ul>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Home;