import React, { useState } from 'react';
import "../styles/Dhlwsh.css"
import New_dhl from './new_dhl';
import Old_dhl from './old_dhl';
import Layout from '../Components/Layout';


function Dhlwsh (){


  return(
    <Layout>
  <div>
    <br></br><br></br>
<div class="layout">
  <input name="nav" type="radio" class="nav home-radio" id="home" checked="checked" />
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

  <input name="nav" type="radio" class="about-radio" id="about" />
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
</Layout>
  );

}

export default Dhlwsh;
