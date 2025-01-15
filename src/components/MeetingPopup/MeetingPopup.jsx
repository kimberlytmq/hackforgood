import React, { useState } from 'react';
import './MeetingPopup.css';

function MeetingPopup({ setIsMeetingPopupOpen }) {
  const [currentMonth, setCurrentMonth] = useState('June 2024');
  
  const handleClose = () => {
    setIsMeetingPopupOpen(false);
  };

  // Array of weekdays and dates
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const days = [
    [2,3,4,5,6,7,8],
    [9,10,11,12,13,14,15],
    [16,17,18,19,20,21,22],
    [23,24,25,26,27,28,29],
    [30,'','','','','','']
  ];

  return (
    <div className="Meetingpopup">
      <div onClick={handleClose} className="overlay"></div>
      <div className="Meetingpopup-content">
        <h2>Add Meeting</h2>
        <p>Choose the people you want to meet with and the time slots you're free!</p>
        <div className="section">
          <h3>Meeting Details</h3>
          <div className="box">
            <label>Meeting Title:</label>
            <input type="text" placeholder="Enter title" />
          </div>
          <div className="box">
            <label>Attendees:</label>
            <select>
              <option value="Mark Goh">Mark Goh</option>
              <option value="Aiken">Aiken</option>
              <option value="Dueet">Dueet</option>
            </select>
          </div>
          
          {/* Calendar Section */}
          <div className="calendar-container">
            <div className="calendar-header">
              <h3>{currentMonth}</h3>
              <div className="calendar-nav">
                <button>&lt;</button>
                <button>&gt;</button>
              </div>
            </div>
            
            <div className="calendar-grid">
              {/* Weekday headers */}
              {weekDays.map(day => (
                <div key={day} className="calendar-weekday">
                  {day}
                </div>
              ))}
              
              {/* Calendar days */}
              {days.map((week, weekIndex) => (
                week.map((day, dayIndex) => (
                  <div 
                    key={`${weekIndex}-${dayIndex}`}
                    className={`calendar-day ${day === 26 ? 'selected' : ''}`}
                  >
                    {day}
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>
        <button className="close-Meetingpopup" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default MeetingPopup;