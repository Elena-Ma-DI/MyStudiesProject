
import "../styles/old_dhl.css"
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



//istoriko ndhlwsewn firebase

function Old_dhl() {

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{color: 'rgb(150, 50, 150)',}}
        >
          (E) 20-21
        </AccordionSummary>
        <AccordionDetails>
        <ul> 
        <li>Ηλεκτρομαγνητισμός – Οπτική και Σύγχρονη Φυσική</li> 
        <li>Δομές Δεδομένων και Τεχνικές Προγραμματισμού </li> 
        <li>Ανάλυση Ι</li> 
        <li>Εφαρμοσμένα Μαθηματικά</li> 
        <li> Αρχιτεκτονική Υπολογιστών Ι</li> 
            </ul> 
        
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={{color: 'rgb(150, 50, 150)',}}
        >
          (X) 20-21
        </AccordionSummary>
        <AccordionDetails>
        <ul> 
        <li>Γραμμική Άλγεβρα</li> 
        <li>Διακριτά Μαθηματικά</li> 
        <li>Εισαγωγή στον Προγραμματισμό</li> 
        <li>Εισαγωγή στην Πληροφορική και στις Τηλεπικοινωνίες</li> 
        <li>Λογική Σχεδίαση</li> 
            </ul> 
        

        </AccordionDetails>
      </Accordion>
   
    </div>
  );
}



export default Old_dhl;
