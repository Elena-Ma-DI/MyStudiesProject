import React, { useState } from 'react';
import "../../styles/Dhlwsh.css"
import New_dhl from '../new_dhl';
import Old_dhl from '../old_dhl';
import { Link } from 'react-router-dom';



function Dhlwsh (){


  return(
  <div>
     <span style={{ color: 'rgb(150, 50, 150)', fontWeight: 'normal' }}><Link to="/" style={{ fontSize: '1.6em' }}>Αρχική/</Link><Link to="/services" style={{ fontSize: '1.6em' }}>Υπηρεσίες/</Link>
        <Link to="/servicesstudent" style={{ fontSize: '1.6em' }}>Φοιτητές/</Link><Link to="/istorikodilwsewn" style={{ fontSize: '1.6em' }}>Ιστορικό Δηλώσεων/</Link></span>
    <br></br><br></br>
<div class="layout">
  <input name="nav" type="radio" class="nav home-radio" id="home" />
  <div class="page home-page">
    <div class="page-contents">
      <h1>Δήλωση</h1>
      <div>

</div>
      <p><font color="red">Η περίοδος δηλώσεων μαθημάτων είναι ανοιχτή απο : 15/11/2023 έως 25/12/2023 </font> </p>
      <br></br>
      <New_dhl/>
      <br></br>

    </div>
  </div>
  <label class="nav" for="home">
    <span>
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"></svg>
      Δήλωση
    </span>
  </label>

  <input name="nav" type="radio" class="about-radio" id="about" checked= "checked" />
  <div class="page about-page">
    <div class="page-contents">
      <h1>Προηγούμενες Δηλώσεις</h1>
     
     <Old_dhl/>

    </div>
  </div>
  <label class="nav" for="about">
    <span>
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"></svg>
    Προηγούμενες Δηλώσεις
      </span>
    </label>

</div>

</div>

  );

}

export default Dhlwsh;
