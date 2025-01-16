import /*React,*/ {useState} from 'react';
import Navbar from './components/Navbar';
// import Home from './pages/Home.jsx';
import Place from './Place.jsx';
import Calendar from './pages/Calendar.jsx';
import Projects from './pages/Projects.jsx';
import MeetingPopup from './components/MeetingPopup/MeetingPopup.jsx';
import TaskPopup from './components/TaskPopup/TaskPopup.jsx';
import ProjectPage from './components/projectPage.jsx';
import {Routes, Route} from 'react-router-dom'
const Dashboard = () => {
  const [isMeetingPopupOpen, setIsMeetingPopupOpen] = useState(false);
  const [isTaskPopupOpen, setIsTaskPopupOpen] = useState(false);

   return (
     <>
       <Navbar
         setIsMeetingPopupOpen={setIsMeetingPopupOpen}
          setIsTaskPopupOpen={setIsTaskPopupOpen}
          />
        <Routes>
           <Route path="/place" element={<Place />} />
            <Route path="/calendar" element={<Calendar />} />
           <Route path="/projects" element={<Projects />} />
            <Route path="/project/:name" element={<ProjectPage />} />
          </Routes>
           {isMeetingPopupOpen && <MeetingPopup setIsMeetingPopupOpen={setIsMeetingPopupOpen} />}
           {isTaskPopupOpen && <TaskPopup setIsTaskPopupOpen={setIsTaskPopupOpen} />}
      </>
    )
}

export default Dashboard;