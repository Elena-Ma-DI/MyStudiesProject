import React, { useState } from 'react';
import '../styles/GradesStudent.css';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';
import Layout from '../Components/Layout';

const examsData = [
  { id: 1, period: 'Ιανουαρίου', course: 'Γραμμική Άλγεβρα', grade: 8, passed: true },
  { id: 2, period: 'Ιανουαρίου', course: 'Εισαγωγή στον Προγραμματισμό', grade: 4, passed: false },
  { id: 3, period: 'Ιουνίου', course: 'Δομές Δεδομένων και Τεχνικές Προγραμματισμού', grade: 9, passed: true },
  { id: 4, period: 'Ιουνίου', course: 'Ανάλυση 1', grade: 4, passed: false },
  { id: 5, period: 'Σεπτεμβρίου', course: 'Ανάλυση 1', grade: 7, passed: true },
  { id: 6, period: 'Σεπτεμβρίου', course: 'Εισαγωγή στον Προγραμματισμό', grade: 7, passed: true },
];

const GradesStudent = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Όλες οι Περίοδοι');

  const filterByPeriod = (period) => {
    setSelectedPeriod(period);
  };

  const componentRef = useRef(); // Δημιουργήστε ένα ref

  return (
    <Layout>
    <div className="GradesStudent">
   

      <h1>Βαθμολογία Φοιτητή</h1>

      <select value={selectedPeriod} onChange={(e) => filterByPeriod(e.target.value)}>
      <option value="Όλες οι Περίοδοι">Όλες οι Περίοδοι</option>
      <option value="Ιανουαρίου">Ιανουαρίου</option>
      <option value="Ιουνίου">Ιουνίου</option>
      <option value="Σεπτεμβρίου">Σεπτεμβρίου</option>
      </select>

      <table ref={componentRef}>
        <thead>
          <tr>
            <th>Μάθημα</th>
            <th>Βαθμός</th>
            <th>Αποτέλεσμα</th>
          </tr>
        </thead>
        <tbody>
          {examsData
            .filter((exam) => selectedPeriod === 'Όλες οι Περίοδοι' || exam.period === selectedPeriod)
            .map((exam) => (
              <tr key={exam.id}>
                <td>{exam.course}</td>
                <td>{exam.grade}</td>
                <td className={exam.passed ? 'passed' : 'failed'}>{exam.passed ? 'Επιτυχία' : 'Αποτυχία'}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <ReactToPrint
        trigger={() => <button>Εκτύπωση Βαθμολογίας</button>}
        content={() => componentRef.current}
      />

    </div>
  </Layout>
  );
};

export default GradesStudent;