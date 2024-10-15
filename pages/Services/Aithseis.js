import React, { useState ,  useEffect } from 'react';
import "../../styles/Aithseis.css"
import { aitisiCollection } from '../../config/firebase'; 
import { onSnapshot } from '@firebase/firestore';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import{Link} from 'react-router-dom';
import Layout from '../../Components/Layout';
/// istoriko aithsewn firebase


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#fafafa",
  },
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
  },
  '&:hover': {
    backgroundColor: "rgb(185, 186, 189)" , 
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#D9D9D9',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));




export default function Aithseis(){
  
    const[aitisi, setAitisi]=  useState([]);
    
  useEffect(() => {
    onSnapshot(aitisiCollection, (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data());
      console.log(data); // Εκτυπώνει τα δεδομένα στην κονσόλα
      setAitisi(data);
    });
  }, []);


      return(
 <Layout>
<div>
      <h1 style={
        {
          color: 'rgb(150, 50, 150)',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontStyle: 'italic',
          fontWeight: 'bold',
          paddingLeft: '1%',
        }}>
        Ιστορικό Αιτήσεων</h1>

      <button className="leftButton" ><Link to="/new_Aithseis">Νέα Αίτηση </Link></button>
      <br></br>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Ημερομηνία</StyledTableCell>
              <StyledTableCell align="center">Τύπος</StyledTableCell>
              <StyledTableCell align="center">Κατάσταση</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {aitisi.map((aitisi, index) => (
            <StyledTableRow key={aitisi.id}>
              <StyledTableCell align="center">{aitisi.date}</StyledTableCell>
              <StyledTableCell align="center">{aitisi.type}</StyledTableCell>
              <StyledTableCell align="center">{aitisi.cat}</StyledTableCell>
         
            </StyledTableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br></br>
      <br></br>
    </div>
    </Layout>
  );
}