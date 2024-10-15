import './App.css'
import Home from "./pages/Home";
import Announcements from "./pages/Announcements";
import Courses from './pages/Courses';
import Services from "./pages/Services/Services"
import ServicesStuudents from './pages/ServicesStuudents';
import ServicesTeachers from './pages/Services/ServicesTeachers'
import Aithseis from './pages/Services/Aithseis';
import Aithseisteachers from './pages/Services/Aithseisteachers';
import Grades from "./pages/Grades"
import GradesStudent from './pages/Gradesstudent';
import GradeTeacher from './pages/GradeTeacher';
import IstorikoDilwsewn from './pages/Services/IstorikoDilwsewn';
import Profilestudent from './pages/Profilestudent';
import ProfileTeacher from './pages/ProfileTeacher';
import GeneralProfile from './pages/GeneralProfile'
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Register from './pages/Register';
import { onAuthStateChanged } from "firebase/auth";
import { AuthProvider } from './context/AuthContext';
import { useState, useEffect } from 'react';
import { auth } from './config/firebase';
import Help from './pages/Help';
import New_Aithseis from './pages/New_Aithseis';
import Dhlwsh from './pages/Dhlwsh';









function App() {  

  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);


  return (
    <AuthProvider>
      <Router> 
        <Routes> 
          <Route path="/" element={<Home />}/>
          <Route path="/announcements" element={<Announcements/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/servicesstudent" element={<ServicesStuudents/>}/>
          <Route path="/servicesteacher" element={<ServicesTeachers/>}/>
          <Route path="/aithseis" element={<Aithseis/>}/>
          <Route path="/New_Aithseis" element={<New_Aithseis/>}/>
          <Route path="/Dhlwsh" element={<Dhlwsh/>}/>
          <Route path="/aithseisteacher" element={<Aithseisteachers/>}/>
          <Route path="/grades" element={<Grades/>}/>
          <Route path="/gradesstudent" element={<GradesStudent/>}/>
          <Route path="/gradesTeacher" element={<GradeTeacher/>}/>
          <Route path="/istorikodilwsewn" element={<IstorikoDilwsewn/>}/>
          <Route path="/generalprofile" element={<GeneralProfile/>}/>
          <Route exact path="/profilestudent" element={<Profilestudent authorized={true}/>}/>
          <Route exact path="/profileteacher" element={<ProfileTeacher authorized={true}/>}/>
          <Route exact path="/help" element={<Help/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
        </Routes>
      </Router>
      </AuthProvider>
  );
}

export default App;
