import React, {useState} from 'react'
import Layout from '../../Components/Layout';

const Aithseis=()=>{

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
        <h1>Αιτήσεις Καθηγητές</h1>
<form style={formStyle}>
  <label style={labelStyle} for="fname">Όνομα:</label><br/>
  <input style={inputStyle} type="text" id="fname" name="fname" value="onoma"></input><br/>
  <label style={labelStyle} for="lname">Επιθετο:</label><br/>
  <input style={inputStyle} type="text" id="lname" name="lname" value="epith"></input><br/>
  <label style={labelStyle} for="email">Email:</label><br/>
  <input style={inputStyle} type="email" id="email" name="email" value="abc@mail.com"></input><br/>
  <label style={labelStyle} for="am">Α.Μ.</label><br/>
  <input style={inputStyle} type="text" id="lname" name="am" value="1234567"></input><br/>
  <label style={labelStyle} for="sem">Eξαμηνο</label><br/>
  <input style={inputStyle} type="text" id="sem" name="sem" value="1o"></input><br/><br/>

    <label style={labelStyle} for="Typos aithshw">Τύπος Αίτησης:</label>
    <select style={inputStyle} name="aithsh_typos" id="aithsh_typos">
    <option value="Φορολογικής">Φορολογικής χρήσης</option>
    <option value="Στρατολογικής">Στρατολογικής χρήσης</option>
    <option value="Σίτηση">Σίτησης</option>
</select>
<br/>
<button style={buttonStyle} type="submit">Υποβολή</button>

</form>
</div>
</Layout>
);

}

export default Aithseis;