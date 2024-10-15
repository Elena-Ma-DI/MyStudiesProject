import React, { useState ,  useEffect } from 'react';
import "../styles/Aithseis.css"

import { SxbdCollection } from '../config/firebase'; 
import { onSnapshot } from '@firebase/firestore';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


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


export default function Sxbd(){
  
    const[sxbd, setSxbd]=  useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [grade, setGrade] = useState(sxbd.grade);
    
    const handleChange = (event) => {
        setGrade(event.target.value);
      };

      const handleDoubleClick = () => {
        setIsEditing(true);
      };

      const handleBlur = () => {
        setIsEditing(false);
        // Here you can call your function to update the grade in the database
      };
      


  useEffect(() => {
    onSnapshot(SxbdCollection, (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data());
      console.log(data); // Εκτυπώνει τα δεδομένα στην κονσόλα
      setSxbd(data);
    });
  }, []);


      return(
 
<div>
      <h1 style={
        {
          color: 'rgb(150, 50, 150)',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontStyle: 'italic',
          fontWeight: 'bold',
          paddingLeft: '1%',
        }}>
       SXBD</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Ηname</StyledTableCell>
              <StyledTableCell align="center">am</StyledTableCell>
              <StyledTableCell align="center">email</StyledTableCell>
              <StyledTableCell align="center">Βαθμός</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {sxbd.map((sxbd, index) => (
            <StyledTableRow key={sxbd.id}>
              <StyledTableCell align="center">{sxbd.name}</StyledTableCell>
              <StyledTableCell align="center">{sxbd.am}</StyledTableCell>
              <StyledTableCell align="center">{sxbd.email}</StyledTableCell>
              <StyledTableCell align="center" onDoubleClick={handleDoubleClick}>
  {isEditing ? (
    <input type="text" value={grade} onBlur={handleBlur} onChange={handleChange} autoFocus />
  ) : (
    grade
  )}
</StyledTableCell>
            </StyledTableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br></br>
      <br></br>
    </div>

  );
}