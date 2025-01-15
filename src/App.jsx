import React, { useState } from 'react'; // Ensure React and useState are imported
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Calendar from './pages/Calendar.jsx';
import Projects from './pages/Projects.jsx';
<<<<<<< HEAD
import ProjectPage from './components/projectPage.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:name" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
=======
import MeetingPopup from './components/MeetingPopup/MeetingPopup.jsx';
import TaskPopup from './components/TaskPopup/TaskPopup.jsx';


function App() {
 const [isMeetingPopupOpen, setIsMeetingPopupOpen] = useState(false);
 const [isTaskPopupOpen, setIsTaskPopupOpen] = useState(false);



 return (
   <Router>
     <Navbar 
        setIsMeetingPopupOpen={setIsMeetingPopupOpen} 
        setIsTaskPopupOpen={setIsTaskPopupOpen}
        />
     <Routes>
       <Route path="/" element={<Navigate to="/home" />} />
       <Route path="/home" element={<Home />} />
       <Route path="/calendar" element={<Calendar />} />
       <Route path="/projects" element={<Projects />} />
     </Routes>
     {isMeetingPopupOpen && <MeetingPopup setIsMeetingPopupOpen={setIsMeetingPopupOpen} />}
     {isTaskPopupOpen && <TaskPopup setIsTaskPopupOpen={setIsTaskPopupOpen} />}
   </Router>
 );
>>>>>>> a3a3273b0258800c9c4c42e220e140aa15bda24e
}


export default App;
