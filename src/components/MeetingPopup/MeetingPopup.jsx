import React, { useState } from 'react';
import './MeetingPopup.css';

function MeetingPopup({ setIsMeetingPopupOpen }) {
  const [currentMonth, setCurrentMonth] = useState('JAN 2025');

  
  const handleClose = () => {
    setIsMeetingPopupOpen(false);
  };

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const days = [
    ['','','',1,2,3,4],
    [5,6,7,8,9,10,11],
    [12,13,14,15,16,17,18],
    [19,20,21,22,23,24,25],
    [26,27,28,29,30,31,'']
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

          <div className="box duration">
            <label>Duration:</label>
            <select>
              <option value="" disabled>Select duration</option>
              <option value="15">15 Minutes</option>
              <option value="30">30 Minutes</option>
              <option value="60">1 Hour</option>
              <option value="120">2 Hours</option>
            </select>
          </div>

          <div className="box timeslot">
            <label>Timeslot:</label>
            <select>
              <option value="" disabled>Select timeslot</option>
              <option value="9:00 - 10:30">9:00 - 10:30</option>
              <option value="11:30 - 1:30">11:30 - 1:30</option>
              <option value="2:30 - 4:30">2:30 - 4:30</option>
              <option value="5:00 - 6:00">5:00 - 6:00</option>
            </select>
          </div>

          {/* Calendar */}
          <div className="calendar-container">
            <div className="calendar-header">
              <h3>{currentMonth}</h3>
              <div className="calendar-nav">
                <button>&lt;</button>
                <button>&gt;</button>
              </div>
            </div>
            
            <div className="calendar-grid">
              {weekDays.map(day => (
                <div key={day} className="calendar-weekday">
                  {day}
                </div>
              ))}
              
              {/* Calendar */}
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