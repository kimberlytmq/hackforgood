// filepath: /c:/Users/wenti/hackforgood/src/Place.jsx
import /*React,*/ { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './Place.css';
import Calendar from './pages/Calendar';
import Projects from './pages/Projects';
import MeetingPopup from './components/MeetingPopup/MeetingPopup';
import TaskPopup from './components/TaskPopup/TaskPopup';
import ProjectPage from './components/projectPage';
import DaySchedule from './components/DaySchedule';

function Place() {
  const [isMeetingPopupOpen, setIsMeetingPopupOpen] = useState(false);
  const [isTaskPopupOpen, setIsTaskPopupOpen] = useState(false);

  return (
    <div className="place-container">
      <Navbar
        setIsMeetingPopupOpen={setIsMeetingPopupOpen}
        setIsTaskPopupOpen={setIsTaskPopupOpen}
      />
      <h1 className="place-header">Hey there! Here is your schedule for today</h1>
      <div className="day-schedule">
        <DaySchedule />
      </div>
      <Routes>
        <Route path="/place" element={<Place />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:name" element={<ProjectPage />} />
      </Routes>
      {isMeetingPopupOpen && <MeetingPopup setIsMeetingPopupOpen={setIsMeetingPopupOpen} />}
      {isTaskPopupOpen && <TaskPopup setIsTaskPopupOpen={setIsTaskPopupOpen} />}
    </div>
  );
}

export default Place;