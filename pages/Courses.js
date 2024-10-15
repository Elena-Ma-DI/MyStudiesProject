import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { coursesCollection} from '../config/firebase'; 
import { onSnapshot} from '@firebase/firestore';
import Layout from '../Components/Layout';
import { purple } from '@mui/material/colors';
import InfoIcon from '@mui/icons-material/Info';
import {Link} from 'react-router-dom';



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

export default function CustomizedTables() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    onSnapshot(coursesCollection, (snapshot) => {
      let data = snapshot.docs.map(doc => doc.data());
      data.sort((a, b) => a.semester - b.semester); // Ταξινόμηση με βάση το εξάμηνο
      setCourses(data);
    });
  }, []);


  return (
    <Layout>
    <>
      <span style={{ color: 'rgb(150, 50, 150)', fontWeight: 'normal' }}><Link to="/" style={{ fontSize: '1.6em' }}>Αρχική/</Link><Link to="/courses" style={{ fontSize: '1.6em' }}>Όλα τα μαθήματα</Link></span>        

      <h1 style={
        {
          color: 'purple',
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontStyle: 'italic',
          fontWeight: 'bold',
          paddingLeft: '1%',
        }}>
        Πρόγραμμα Σπουδών</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              
              <StyledTableCell align="center">Τίτλος</StyledTableCell>
              <StyledTableCell align="right">Κωδικός</StyledTableCell>
              <StyledTableCell align="center">Τύπος</StyledTableCell>
              <StyledTableCell align="right">ECTS</StyledTableCell>
              <StyledTableCell align="right">Εξάμηνο</StyledTableCell>
              <StyledTableCell align="right">Ώρες Διδασκαλίας</StyledTableCell>
              <StyledTableCell align="right">Διδάσκοντες</StyledTableCell>
              <StyledTableCell align="right">Συγγράμματα(Προτεινόμενα)</StyledTableCell>
              <StyledTableCell align="right">Πληροφορίες</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {courses.map((course, index) => (
            <StyledTableRow key={course.id}>
              <StyledTableCell align="center">{course.title}</StyledTableCell>
              <StyledTableCell align="center">{course.id}</StyledTableCell>
              <StyledTableCell align="center">{course.type}</StyledTableCell>
              <StyledTableCell align="center">{course.ects}</StyledTableCell>
              <StyledTableCell align="center">{course.semester}</StyledTableCell>
              <StyledTableCell align="center">{course.hours}</StyledTableCell>
              <StyledTableCell align="center">{course.teacher}</StyledTableCell>
              <StyledTableCell align="center">{course.syggrama}</StyledTableCell>
              <StyledTableCell align="center">
                <a href={course.info} target="_blank" rel="noopener noreferrer">
                  <InfoIcon />
                </a>
              </StyledTableCell>

            </StyledTableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
    </Layout>
  );
}