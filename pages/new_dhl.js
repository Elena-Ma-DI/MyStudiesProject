import React, { useState } from 'react';



//nea dhlwsh firebase


function New_dhl() {


  const checkboxOptions = [
    {
      header: 'Προτεινόμενα Μαθήματα',
      checkboxes: [
        { id: 1, label: 'Γραμμική Άλγεβρα' },
        { id: 2, label: 'Διακριτά Μαθηματικά' },
      ],
    },
    {
      header: '3ο Εξάμηνο',
      checkboxes: [
        { id: 3, label: 'Ανάλυση ΙΙ' },
        { id: 4, label: 'Σήματα και Συστήματα' },
        { id: 5, label: 'Αντικειμενοστραφής Προγραμματισμός'},
        { id: 6, label: 'Πιθανότητες και Στατιστική'},
      ],
    },
    {
      header: '5ο Εξάμηνο',
      checkboxes: [
        { id: 7, label: 'Αριθμητική Ανάλυση' },
        { id: 8, label: 'Λειτουργικά Συστήματα' },
        { id: 9, label: 'Υλοποίηση Συστημάτων Βάσεων Δεδομένων'},
        { id: 10, label: 'Τεχνητή Νοημοσύνη'},
      ],
    },

  ];

  const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const maxCheckedLimit = 5; // Set the maximum number of checkboxes that can be checked

  const handleCheckboxChange = (id) => {
    if (checkedCheckboxes.includes(id)) {
      // If the checkbox is already checked, uncheck it
      setCheckedCheckboxes((prevChecked) => prevChecked.filter((checkedId) => checkedId !== id));
      setErrorMessage('');
    } else if (checkedCheckboxes.length < maxCheckedLimit) {
      // If the checkbox is not checked and the limit is not reached, check it
      setCheckedCheckboxes((prevChecked) => [...prevChecked, id]);
      setErrorMessage('');
    }
    else {   
      setErrorMessage(`Μπορείς να επιλέξεις ${maxCheckedLimit} μαθήματα.`);
    }
  };

  const handleUncheckAll = () => {
    // Uncheck all checkboxes
   // setCheckedCheckboxes([]);
    setErrorMessage('');
    window.location.href = "./Dhlwsh";
  };

      const [hidden, setHidden] = useState(false);
     
    
return(

    <div>

    <button onClick={() => setHidden(!hidden) & setErrorMessage('')}>{hidden ?  'Επεξεργασία' : ' Αποθήκευση'}</button>
    {/* <button onClick={handleUncheckAll}>Νέα Δήλωση</button> */}

    <button onClick={ handleUncheckAll}>Νέα Δήλωση</button>
  
  

        <div className = "do_dhl" hidden={hidden}>
      <p><font color="purple"> Έχεις επιλέξει  {checkedCheckboxes.length} / {maxCheckedLimit} μαθήματα</font> </p>
     
      {checkboxOptions.map((group, groupIndex) => (
        <div key={groupIndex}>
          <h3>{group.header}</h3>
          {group.checkboxes.map((checkbox) => (
            <div key={checkbox.id}>
              <label>
                <input
                  type="checkbox"
                  checked={checkedCheckboxes.includes(checkbox.label)}
                  onChange={() => handleCheckboxChange(checkbox.label)}
                />
                {checkbox.label}
              </label>
            </div>
          ))}
        </div>
      ))}
       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
       </div>
      
    
      <div className = "per_dhl" >
        <h2>Επιλεγμένα Μαθήματα</h2>
        {checkedCheckboxes.map((label) => (
          <p key={label}> {label}</p>
        ))}
      </div>

   


</div>
);
}


export default New_dhl;
