import React from 'react';
import{Link} from 'react-router-dom';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import YoutubeIcon from "@mui/icons-material/YouTube"
import PhoneIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";
function Footer() {
  return (
    <div className='Footer'>
        <div className='SocialNetwords'>
            <h1>Social Networks</h1>
            <Link to="https://www.facebook.com/dituoa/"><button><FacebookIcon/> </button></Link>
            <Link to="https://twitter.com/dit_uoa/"><button><TwitterIcon/></button></Link>
            <Link to="https://www.linkedin.com/groups/51107"><button><LinkedInIcon/></button></Link>
            <Link to="https://www.youtube.com/channel/UCBe-uucrwt5NpkQN3mNcQtQ/about"><button><YoutubeIcon/></button></Link>    
        </div>
        <div className='Contact'>
            <h1>Επικοινωνία</h1>
            <p>
                <span>Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών
                Τμήμα Πληροφορικής και Τηλεπικοινωνιών
                Πανεπιστημιούπολη, Ιλίσια
                Αθήνα, 16122</span>
                <span><EmailIcon/> secret@di.uoa.gr </span>
                <span><PhoneIcon/> +30 210 727 5173 </span>
                <span><PhoneIcon/> +30 210 727 5192 </span>
                <span><PhoneIcon/> +30 210 727 5111 (Θυρωρείο)</span>
            </p>


        </div>
        <p> &copy; 2024 mystudies.gr</p> {/*copyright symbol*/}
    </div>
  );
}

export default Footer