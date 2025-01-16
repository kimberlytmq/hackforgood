//import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faProjectDiagram, faPlusCircle, faTasks } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import PropTypes from 'prop-types';

function Navbar( {setIsMeetingPopupOpen, setIsTaskPopupOpen} ) {
 const handleMeetingClick = () => {
   setIsMeetingPopupOpen(true);
 };

 const handleTaskClick = () => {
  setIsTaskPopupOpen(true);
};



 return (
   <div className="sidebar">
     <Link to="/place" className="sidebar-link">
       <FontAwesomeIcon icon={faHome} /> Home
     </Link>
     <div className="sidebar-link" onClick={handleMeetingClick}>
       <FontAwesomeIcon icon={faPlusCircle} /> Add Meeting
     </div>
     <div className="sidebar-link" onClick={handleTaskClick}>
       <FontAwesomeIcon icon={faTasks} /> Add Task
     </div>
     <Link to="/calendar" className="sidebar-link">
       <FontAwesomeIcon icon={faCalendarAlt} /> Calendar
     </Link>
     <Link to="/projects" className="sidebar-link">
       <FontAwesomeIcon icon={faProjectDiagram} /> Projects
     </Link>
   </div>
 );
}

Navbar.propTypes = {
  setIsMeetingPopupOpen: PropTypes.func.isRequired,
  setIsTaskPopupOpen: PropTypes.func.isRequired,
};

export default Navbar;