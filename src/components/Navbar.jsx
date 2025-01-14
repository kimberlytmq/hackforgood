//import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faProjectDiagram, faPlusCircle, faTasks } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar( {setIsPopupOpen} ) {
 const handleClick = () => {
   setIsPopupOpen(true);
 };

 return (
   <div className="sidebar">
     <Link to="/" className="sidebar-link">
       <FontAwesomeIcon icon={faHome} /> Home
     </Link>
     <div className="sidebar-link" onClick={handleClick}>
       <FontAwesomeIcon icon={faPlusCircle} /> Add Meeting
     </div>
     <div className="sidebar-link" onClick={() => alert('Add Task Popup')}>
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


export default Navbar;