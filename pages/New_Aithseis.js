import { aitisiCollection } from '../config/firebase';
import { addDoc } from "firebase/firestore";
import{Link} from 'react-router-dom';
import Layout from '../Components/Layout';

import React, {useState} from 'react'

function New_Aithseis(){

  const daten = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const defaultcat = 'Εγκρίθηκε'
  const [date, setDate] = useState(daten);
  const [type , setType] =useState("");
  const[ cat, setCat]= useState(defaultcat );


  const  HandleSubmit = async (e) => {
    e.preventDefault();

    setDate(daten);
    setCat(defaultcat);
    const docRef = await addDoc(aitisiCollection,
    {  date,
      type,
      cat,
    });
  }

// Ορίστε τα αντικείμενα στυλ
const formStyle = {
  padding: '20px',
  borderRadius: '5px',
  width: '300px',
  margin: '0 auto'
};

const labelStyle = {
  display: 'block',
  marginBottom: '3px'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '8px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '5px'
};

return (
  <Layout>
    <div className = "Aithsh">
        <h1>Αιτήσεις</h1>
<form onSubmit={HandleSubmit} style={formStyle}>
  <label style={labelStyle} for="fname">Όνομα:</label><br/>
  <input style={inputStyle} type="text" id="fname" name="fname" value="Μαρία"></input><br/>
  <label style={labelStyle} for="lname">Επιθετο:</label><br/>
  <input style={inputStyle} type="text" id="lname" name="lname" value="Παππαδοπούλου"></input><br/>
  <label style={labelStyle} for="email">Email:</label><br/>
  <input style={inputStyle} type="email" id="email" name="email" value="sdi2000154@di.uoa.gr"></input><br/>
  <label style={labelStyle} for="am">Α.Μ.</label><br/>
  <input style={inputStyle} type="text" id="lname" name="am" value="11152020000154"></input><br/>
  <label style={labelStyle} for="sem">Eξαμηνο</label><br/>
  <input style={inputStyle} type="text" id="sem" name="sem" value="7o"></input><br/><br/>

 

    <label style={labelStyle} for="Typos aithshw">Τύπος Αίτησης:</label>
    <select style={inputStyle} name="aithsh_typos" id="aithsh_typos"  value = {type} onChange={(e)=>setType(e.target.value)} >
    <option value="Φορολογικής χρήσης">Φορολογικής χρήσης</option>
    <option value="Φορολογικής χρήσης">Φορολογικής χρήσης</option>
    <option value="Στρατολογικής χρήσης">Στρατολογικής χρήσης</option>
    <option value="Σίτηση">Σίτησης</option>
</select>
<br/>
<button style={buttonStyle} type="submit" ><Link to="/Aithseis">Υποβολή</Link></button>

</form>
</div>
</Layout>
);

}

export default New_Aithseis;