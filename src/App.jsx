import React, { useState } from 'react'; // Ensure React and useState are imported
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Calendar from './pages/Calendar.jsx';
import Projects from './pages/Projects.jsx';
import Popup from './components/MeetingPopup/MeetingPopup.jsx';


function App() {
 const [isMeetingPopupOpen, setIsMeetingPopupOpen] = useState(false);


 return (
   <Router>
     <Navbar setIsMeetingPopupOpen={setIsMeetingPopupOpen} />
     <Routes>
       <Route path="/" element={<Navigate to="/home" />} />
       <Route path="/home" element={<Home />} />
       <Route path="/calendar" element={<Calendar />} />
       <Route path="/projects" element={<Projects />} />
     </Routes>
     {isMeetingPopupOpen && <Popup setIsMeetingPopupOpen={setIsMeetingPopupOpen} />}
   </Router>
 );
}


export default App;
